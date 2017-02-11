"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const job_1 = require("../../models/job");
const router = new transRouter_1.Router();
router.get('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const jobs = yield job_1.Job.find();
    ctx.body = jobs;
}));
router.get('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const job = yield job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=jobs.js.map
