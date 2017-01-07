"use strict";
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
let reconnectTimeout;
async function reconnectAsync() {
    log('Trying to reconnect...');
    switch (mongoose.connection.readyState) {
        case 0:
            try {
                log('Disconnected, now will try to connect...');
                await mongoose.connect(connectionString, connectionOptions);
            }
            catch (error) {
                log('Could not connect when trying to reconnect.');
            }
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
}
function tryToReconnect() {
    reconnectTimeout = setTimeout(reconnectAsync, 5000);
}
async function rebuildConnectionAsync() {
    clearTimeout(reconnectTimeout);
    log('Rebuilding the connection...');
    switch (mongoose.connection.readyState) {
        case 0:
            await reconnectAsync();
            break;
        case 1:
            log('Connected, disconnecting...');
            await mongoose.connection.close();
            await reconnectAsync();
            break;
        case 2:
            log('Connecting, will close...');
            await mongoose.connection.close();
            await reconnectAsync();
            break;
        case 3:
            log('Disconnecting, will close.');
            await mongoose.connection.close();
            await reconnectAsync();
            break;
    }
}
exports.rebuildConnectionAsync = rebuildConnectionAsync;
async function startConnectionAsync() {
    if (connectionString) {
        connectionOptions.server.socketOptions.connectTimeoutMS = 10000;
        connectionOptions.server.socketOptions.socketTimeoutMS = 10000;
        connectionOptions.server.reconnectTries = 10;
    }
    else if (config_1.Config.isTestEnv) {
        connectionString = 'mongodb://localhost/transempregos-test';
    }
    else if (config_1.Config.isProdEnv) {
        throw new Error('Production has to have MONGO_URI set.');
    }
    else {
        connectionString = 'mongodb://localhost/transempregos';
    }
    try {
        await mongoose.connect(connectionString, connectionOptions);
    }
    catch (error) {
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
}
exports.startConnectionAsync = startConnectionAsync;

//# sourceMappingURL=connectionManager.js.map
