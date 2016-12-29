"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
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
function reconnectAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        debug('Trying to reconnect...');
        switch (mongoose.connection.readyState) {
            case 0:
                try {
                    debug('Disconnected, now will try to connect...');
                    yield mongoose.connect(connectionString, connectionOptions);
                }
                catch (error) {
                    debug('Could not connect when trying to reconnect.');
                }
                break;
            case 1:
                debug('Already connected, we are done.');
                break;
            case 2:
                debug('Already connecting, will give up on this try.');
                break;
            case 3:
                debug('Still disconnecting, will try later.');
                tryToReconnect();
                break;
        }
    });
}
function tryToReconnect() {
    reconnectTimeout = setTimeout(reconnectAsync, 5000);
}
function rebuildConnectionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        clearTimeout(reconnectTimeout);
        debug('Rebuilding the connection...');
        switch (mongoose.connection.readyState) {
            case 0:
                yield reconnectAsync();
                break;
            case 1:
                debug('Connected, disconnecting...');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
            case 2:
                debug('Connecting, will close...');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
            case 3:
                debug('Disconnecting, will close.');
                yield mongoose.connection.close();
                yield reconnectAsync();
                break;
        }
    });
}
exports.rebuildConnectionAsync = rebuildConnectionAsync;
function startConnectionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield mongoose.connect(connectionString, connectionOptions);
        }
        catch (error) {
            debug(`Could not connect to Mongo.\n${error}`);
            tryToReconnect();
        }
        mongoose.connection.on('connecting', () => {
            debug('Mongoose connection connecting.');
        }).on('connected', () => {
            debug('Mongoose connection connected.');
        }).on('open', () => {
            debug('Mongoose connection opened.');
            upmonitor_1.upMonitor.set({ up: true }, 'Connection opened.');
        }).on('disconnecting', () => {
            debug('Mongoose connection disconnecting.');
        }).on('disconnected', () => {
            debug('Mongoose connection disconnected.');
            upmonitor_1.upMonitor.set({ down: true }, 'Connection disconnected.');
            tryToReconnect();
        }).on('close', () => {
            debug('Mongoose connection closed.');
            upmonitor_1.upMonitor.set({ down: true }, 'Connection closed.');
            tryToReconnect();
        }).on('reconnected', () => {
            debug('Mongoose connection reconnected.');
        }).on('error', (err) => {
            debug(`Mongoose connection error: ${err}`);
        });
        process.on('SIGINT', function () {
            mongoose.connection.close(() => {
                debug('Mongoose connection disconnected through app termination');
                process.exit(0);
            });
        });
    });
}
exports.startConnectionAsync = startConnectionAsync;
//# sourceMappingURL=connectionManager.js.map