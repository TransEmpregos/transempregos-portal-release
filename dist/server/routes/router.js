"use strict";
const Router = require("koa-router");
const catchAll_1 = require("./catchAll");
const path = require("path");
const fs = require("fs");
const router = new Router();
const files = fs.readdirSync(__dirname);
const routeModuleNames = files
    .filter(f => f.indexOf('catchAll.js') !== 0 && f.indexOf('router.js') !== 0 && f.endsWith('.js'))
    .map(f => path.basename(f, '.js'));
for (const routeModuleName of routeModuleNames) {
    let routeModule = require(`./${routeModuleName}`);
    for (const routeKey in routeModule) {
        if (!routeModule.hasOwnProperty(routeKey))
            continue;
        const route = routeModule[routeKey];
        router.use(`/api/${routeModuleName}`, route.routes(), route.allowedMethods());
    }
}
router.use(catchAll_1.default.routes(), catchAll_1.default.allowedMethods());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=router.js.map