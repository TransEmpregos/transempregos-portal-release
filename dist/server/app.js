"use strict";
const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const Pug = require("koa-pug");
const mongodb_1 = require("mongodb");
const convert = require('koa-convert');
const path = require("path");
global.log = require('debug')('trans');
const router_1 = require("./routes/router");
const connectionManager_1 = require("./connectionManager");
const config_1 = require("./config");
const staticFiles_1 = require("./staticFiles");
connectionManager_1.startConnectionAsync();
const app = new Koa();
if (!config_1.Config.isTestEnv)
    app.use(logger());
app.use(staticFiles_1.serveStatic());
app.use(convert(json()));
app.use(bodyParser());
const viewPath = path.resolve(__dirname, 'views');
new Pug({
    app: app,
    viewPath: viewPath,
    noCache: config_1.Config.isDevEnv,
    pretty: config_1.Config.isDevEnv,
    locals: {
        iconsDir: '/dist/public/images/icons'
    }
});
app.use(async (ctx, next) => {
    try {
        await next();
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
});
app.use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=app.js.map
