"use strict";
const transRouter_1 = require("./transRouter");
const catchAll_1 = require("./unprotected/catchAll");
const path = require("path");
const fs = require("fs");
const jwt_1 = require("./jwt");
exports.router = new transRouter_1.Router();
addRoutes('unprotected');
addRoutes('protected');
exports.router.use(catchAll_1.default.routes(), catchAll_1.default.allowedMethods());
log('Routes: ' + exports.router.stack.filter(s => s.methods.length).map(s => s.methods.join('|') + ' ' + s.path));
function addRoutes(base) {
    const routes = getRouteModuleNames(path.resolve(__dirname, base));
    for (const routeModuleName of routes) {
        const routeModule = require(`./${base}/${routeModuleName}`);
        for (const routeKey in routeModule) {
            if (!routeModule.hasOwnProperty(routeKey))
                continue;
            const route = routeModule[routeKey];
            if (base === 'protected')
                exports.router.use(`/api/${routeModuleName}`, jwt_1.jwt, route.routes(), route.allowedMethods());
            else
                exports.router.use(`/api/${routeModuleName}`, route.routes(), route.allowedMethods());
        }
    }
}
function getRouteModuleNames(directory) {
    const files = fs.readdirSync(directory);
    const routeModuleNames = files
        .filter(f => !f.startsWith('_')
        && f.indexOf('catchAll.js') !== 0
        && f.endsWith('.js'))
        .map(f => path.basename(f, '.js'));
    return routeModuleNames;
}

//# sourceMappingURL=router.js.map
