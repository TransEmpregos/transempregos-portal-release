"use strict";
const tslib_1 = require("tslib");
const path = require("path");
const mount = require("koa-mount");
const serve = require("koa-static");
const favicon = require("koa-favicon");
const config_1 = require("./config");
const compose = require("koa-compose");
function serveStatic() {
    const middlewares = [];
    const distPublicPath = path.resolve(__dirname, '../public');
    middlewares.push(mount('/dist/public', serve(distPublicPath)));
    middlewares.push(favicon(path.resolve(distPublicPath, 'images', 'icons', 'favicon.ico')));
    if (!config_1.Config.isProdEnv) {
        const publicPath = path.resolve(__dirname, '../../public');
        middlewares.push(mount('/public', serve(publicPath)));
        const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
        middlewares.push(mount('/node_modules', serve(nodeModulesPath)));
    }
    middlewares.push((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const url = ctx.originalUrl;
        if (url.substr(0, 6) === '/dist/'
            || url.substr(0, 14) === '/node_modules/'
            || url.substr(0, 8) === '/public/') {
            ctx.status = 404;
        }
        else {
            yield next();
        }
    }));
    return compose(middlewares);
}
exports.serveStatic = serveStatic;

//# sourceMappingURL=staticFiles.js.map
