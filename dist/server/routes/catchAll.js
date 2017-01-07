"use strict";
const _transRouter_1 = require("./_transRouter");
const job_1 = require("../models/job");
const upmonitor_1 = require("../upmonitor");
const router = new _transRouter_1.Router();
router.get('/', async (ctx) => {
    if (upmonitor_1.upMonitor.isDown) {
        log(`Server is down because of ${upmonitor_1.upMonitor.reason}, not trying to go the database.`);
        await ctx.render('index', { jobs: null, isDown: true });
        return;
    }
    else {
        const jobs = await job_1.Job.find();
        await ctx.render('index', { jobs: jobs });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=catchAll.js.map
