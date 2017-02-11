"use strict";
const koa_jwt = require("koa-jwt");
const config_1 = require("../config");
exports.jwt = koa_jwt({ secret: config_1.secretKey });

//# sourceMappingURL=jwt.js.map
