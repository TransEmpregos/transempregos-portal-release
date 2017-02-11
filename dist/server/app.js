"use strict";
const tslib_1 = require("tslib");
const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const Pug = require("koa-pug");
const mongodb_1 = require("mongodb");
const convert = require('koa-convert');
const etag = require('koa-etag');
const conditional = require('koa-conditional-get');
const path = require("path");
global.log = require('debug')('trans');
const router_1 = require("./routes/router");
const connectionManager_1 = require("./connectionManager");
const config_1 = require("./config");
const Config = require("./config");
const staticFiles_1 = require("./staticFiles");
const user_1 = require("./models/user");
connectionManager_1.startConnectionAsync().then(() => user_1.User.seed());
const app = new Koa();
if (!config_1.isTestEnv)
    app.use(logger());
app.use(convert(conditional()));
app.use(convert(etag()));
app.use(staticFiles_1.serveStatic());
app.use(convert(json()));
app.use(bodyParser());
const viewPath = path.resolve(__dirname, 'views');
new Pug({
    app: app,
    viewPath: viewPath,
    noCache: config_1.isDevEnv,
    pretty: config_1.isDevEnv,
    locals: {
        iconsDir: '/dist/public/images/icons',
        Config: Config
    }
});
app.use((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
app.use(router_1.router.routes())
    .use(router_1.router.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=app.js.map
