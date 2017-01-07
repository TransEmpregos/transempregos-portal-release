"use strict";
const _transRouter_1 = require("./_transRouter");
const job_1 = require("../models/job");
const router = new _transRouter_1.Router();
router.get('/', async (ctx) => {
    const jobs = await job_1.Job.find();
    ctx.body = jobs;
});
router.get('/:id', async (ctx) => {
    const job = await job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
});
router.del('/:id', async (ctx) => {
    await job_1.Job.findOneAndRemove({ _id: ctx.params.id });
    ctx.status = 204;
});
router.post('/', async (ctx) => {
    let job = new job_1.Job(ctx.request.body);
    await job.save();
    ctx.body = job;
});
router.put('/:id', async (ctx) => {
    await job_1.Job.findOneAndUpdate({ _id: ctx.params.id }, ctx.request.body, { runValidators: true });
    const job = await job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=jobs.js.map
