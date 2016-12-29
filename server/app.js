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
const convert = require('koa-convert');
const path = require("path");
const mongoose = require("mongoose");
const router_1 = require("./routes/router");
const debug = require('debug')('trans');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/transempregos').catch(err => console.error(`Could not connect to Mongo.\n${err}`));
const app = new Koa();
const nodeEnv = process.env.NODE_ENV || 'development';
debug(`Environment is '${nodeEnv}'`);
const isDevEnv = nodeEnv === 'development';
const isTestEnv = nodeEnv === 'test';
if (!isTestEnv)
    app.use(logger());
const publicPath = path.resolve(__dirname, '../public');
app.use(mount('/dist/public', serve(publicPath)));
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
app.use(mount('/node_modules', serve(nodeModulesPath)));
app.use(convert(json()));
app.use(bodyParser());
const viewPath = path.resolve(__dirname, '../../server/views');
new Pug({
    app: app,
    viewPath: viewPath,
    noCache: isDevEnv,
    pretty: isDevEnv
});
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (err) {
        console.error(err);
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
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