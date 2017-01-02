"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const mount = require("koa-mount");
const serve = require("koa-static");
const Pug = require("koa-pug");
const mongodb_1 = require("mongodb");
const convert = require('koa-convert');
const path = require("path");
global.log = require('debug')('trans');
const router_1 = require("./routes/router");
const connectionManager_1 = require("./connectionManager");
const config_1 = require("./config");
connectionManager_1.startConnectionAsync();
const app = new Koa();
if (!config_1.Config.isTestEnv)
    app.use(logger());
const publicPath = path.resolve(__dirname, '../public');
app.use(mount('/dist/public', serve(publicPath)));
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
app.use(mount('/node_modules', serve(nodeModulesPath)));
app.use(convert(json()));
app.use(bodyParser());
const viewPath = path.resolve(__dirname, 'views');
new Pug({
    app: app,
    viewPath: viewPath,
    noCache: config_1.Config.isDevEnv,
    pretty: config_1.Config.isDevEnv
});
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (error) {
        if (error instanceof mongodb_1.MongoError) {
            log('Got unhandled mongo error, checking connection.');
            connectionManager_1.rebuildConnectionAsync();
        }
        else {
            log(`Error on middleware\n${error}`);
        }
        ctx.body = { message: error.message };
        ctx.status = error.status || 500;
    }
}));
app.use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=app.js.map