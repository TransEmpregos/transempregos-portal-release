"use strict";
const tslib_1 = require("tslib");
const mongoose = require("mongoose");
const config_1 = require("./config");
const upmonitor_1 = require("./upmonitor");
mongoose.Promise = global.Promise;
let connectionString = process.env.MONGO_URI;
let connectionOptions = {
    server: {
        socketOptions: {
            connectTimeoutMS: 5000,
            socketTimeoutMS: 5000,
            keepAlive: 120
        },
        reconnectTries: 5,
        reconnectInterval: 1000
    },
    replset: {
        keepAlive: 120
    }
};
function connectAsync() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(connectionString, connectionOptions);
            return { connected: true, error: null };
        }
        catch (error) {
            log('Could not connect when trying to reconnect.');
            return { connected: false, error };
        }
    });
}
let reconnectTimeout;
function reconnectAsync() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        log('Trying to reconnect...');
        switch (mongoose.connection.readyState) {
            case 0:
                log('Disconnected, now will try to connect...');
                const { connected } = yield connectAsync();
                if (!connected)
                    log('Could not connect when trying to reconnect.');
                break;
            case 1:
                log('Already connected, we are done.');
                break;
            case 2:
                log('Already connecting, will give up on this try.');
                break;
            case 3:
                log('Still disconnecting, will try later.');
                tryToReconnect();
                break;
        }
    });
}
function tryToReconnect() {
    reconnectTimeout = setTimeout(reconnectAsync, 5000);
}
function rebuildConnectionAsync() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        clearTimeout(reconnectTimeout);
        log('Rebuilding the connection...');
        switch (mongoose.connection.readyState) {
            case 0:
                yield reconnectAsync();
                break;
            case 1:
                log('Connected, disconnecting...');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
            case 2:
                log('Connecting, will close...');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
            case 3:
                log('Disconnecting, will close.');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
        }
    });
}
exports.rebuildConnectionAsync = rebuildConnectionAsync;
function startConnectionAsync() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (connectionString) {
            connectionOptions.server.socketOptions.connectTimeoutMS = 10000;
            connectionOptions.server.socketOptions.socketTimeoutMS = 10000;
            connectionOptions.server.reconnectTries = 10;
        }
        else if (config_1.isTestEnv) {
            connectionString = 'mongodb://localhost/transempregos-test';
        }
        else if (config_1.isProdEnv) {
            throw new Error('Production has to have MONGO_URI set.');
        }
        else {
            connectionString = 'mongodb://localhost/transempregos';
        }
        const { connected, error } = yield connectAsync();
        if (!connected) {
            log(`Could not connect to Mongo.\n${error}`);
            tryToReconnect();
        }
        mongoose.connection.on('connecting', () => {
            log('Mongoose connection connecting.');
        }).on('connected', () => {
            log('Mongoose connection connected.');
        }).on('open', () => {
            log('Mongoose connection opened.');
            upmonitor_1.upMonitor.set({ up: true }, 'Connection opened.');
        }).on('disconnecting', () => {
            log('Mongoose connection disconnecting.');
        }).on('disconnected', () => {
            log('Mongoose connection disconnected.');
            upmonitor_1.upMonitor.set({ down: true }, 'Connection disconnected.');
            tryToReconnect();
        }).on('close', () => {
            log('Mongoose connection closed.');
            upmonitor_1.upMonitor.set({ down: true }, 'Connection closed.');
            tryToReconnect();
        }).on('reconnected', () => {
            log('Mongoose connection reconnected.');
        }).on('error', (err) => {
            log(`Mongoose connection error: ${err}`);
        });
        process.on('SIGINT', function () {
            mongoose.connection.close(() => {
                log('Mongoose connection disconnected through app termination');
                process.exit(0);
            });
        });
    });
}
exports.startConnectionAsync = startConnectionAsync;

//# sourceMappingURL=connectionManager.js.map
