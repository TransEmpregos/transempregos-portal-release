"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const job_1 = require("../../models/job");
const router = new transRouter_1.Router();
router.del('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield job_1.Job.findOneAndRemove({ _id: ctx.params.id });
    ctx.status = 204;
}));
router.post('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    let job = new job_1.Job(ctx.request.body);
    yield job.save();
    ctx.body = job;
}));
router.put('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield job_1.Job.findOneAndUpdate({ _id: ctx.params.id }, ctx.request.body, { runValidators: true });
    const job = yield job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=jobs.js.map
