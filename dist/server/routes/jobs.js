"use strict";
const tslib_1 = require("tslib");
const _transRouter_1 = require("./_transRouter");
const job_1 = require("../models/job");
const router = new _transRouter_1.Router();
router.get('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const jobs = yield job_1.Job.find();
    ctx.body = jobs;
}));
router.get('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const job = yield job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
}));
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
