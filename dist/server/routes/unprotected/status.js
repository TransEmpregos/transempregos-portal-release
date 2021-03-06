"use strict";
const transRouter_1 = require("../transRouter");
const upmonitor_1 = require("../../upmonitor");
exports.statusRouter = new transRouter_1.Router();
exports.statusRouter.get('/', ctx => {
    if (upmonitor_1.upMonitor.isUp) {
        ctx.status = 200;
        ctx.body = { status: 'ok' };
    }
    else {
        ctx.status = 503;
        ctx.body = { status: `Server is down because '${upmonitor_1.upMonitor.reason}'` };
    }
});

//# sourceMappingURL=status.js.map
