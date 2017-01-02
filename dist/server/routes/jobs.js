"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const _transRouter_1 = require("./_transRouter");
const job_1 = require("../models/job");
const router = new _transRouter_1.Router();
router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    const jobs = yield job_1.Job.find();
    ctx.body = jobs;
}));
router.get('/:id', (ctx) => __awaiter(this, void 0, void 0, function* () {
    const job = yield job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
}));
router.del('/:id', (ctx) => __awaiter(this, void 0, void 0, function* () {
    yield job_1.Job.findOneAndRemove({ _id: ctx.params.id });
    ctx.status = 204;
}));
router.post('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    let job = new job_1.Job(ctx.request.body);
    yield job.save();
    ctx.body = job;
}));
router.put('/:id', (ctx) => __awaiter(this, void 0, void 0, function* () {
    yield job_1.Job.findOneAndUpdate({ _id: ctx.params.id }, ctx.request.body, { runValidators: true });
    const job = yield job_1.Job.findOne({ _id: ctx.params.id });
    ctx.body = job;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=jobs.js.map