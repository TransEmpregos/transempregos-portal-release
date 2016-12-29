#!/usr/bin/env node --harmony-async-await
"use strict";
const app_1 = require("../app");
const http = require("http");
const Debug = require("debug");
const debug = Debug('server');
const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app_1.default.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    const p = parseInt(val, 10);
    if (isNaN(p))
        return val;
    if (p >= 0)
        return p;
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=www.js.map