"use strict";
const mongoose = require("mongoose");
const config_1 = require("./config");
mongoose.Promise = global.Promise;
function startConnection() {
    const connectionString = process.env.MONGO_URI;
    let connectResult;
    if (connectionString) {
        connectResult = mongoose.connect(connectionString, {
            server: {
                socketOptions: {
                    connectTimeoutMS: 10000,
                    socketTimeoutMS: 10000
                },
                reconnectTries: 10,
                reconnectInterval: 1000
            }
        });
    }
    else if (config_1.Config.isTestEnv) {
        connectResult = mongoose.connect('mongodb://localhost/transempregos-test', {
            server: {
                socketOptions: {
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000
                },
                reconnectTries: 5,
                reconnectInterval: 500
            }
        });
    }
    else if (config_1.Config.isProdEnv) {
        throw new Error('Production has to have MONGO_URI set.');
    }
    else {
        connectResult = mongoose.connect('mongodb://localhost/transempregos', {
            server: {
                socketOptions: {
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000
                },
                reconnectTries: 5,
                reconnectInterval: 500
            }
        });
    }
    connectResult.catch(err => debug(`Could not connect to Mongo.\n${err}`));
}
exports.startConnection = startConnection;
//# sourceMappingURL=connectionManager.js.map