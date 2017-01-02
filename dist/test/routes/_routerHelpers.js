"use strict";
const _transRouter_1 = require("../../server/routes/_transRouter");
_transRouter_1.Router.prototype.findRoute = function (route) {
    const method = this.stack.find((s) => s.path === route).stack[0];
    return method;
};
//# sourceMappingURL=_routerHelpers.js.map