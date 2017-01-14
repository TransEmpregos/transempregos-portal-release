"use strict";
const tslib_1 = require("tslib");
const _transRouter_1 = require("./_transRouter");
const job_1 = require("../models/job");
const upmonitor_1 = require("../upmonitor");
const router = new _transRouter_1.Router();
router.get('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (upmonitor_1.upMonitor.isDown) {
        log(`Server is down because of ${upmonitor_1.upMonitor.reason}, not trying to go the database.`);
        yield ctx.render('index', { jobs: null, isDown: true });
        return;
    }
    else {
        const jobs = yield job_1.Job.find();
        yield ctx.render('index', { jobs: jobs });
    }
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=catchAll.js.map
