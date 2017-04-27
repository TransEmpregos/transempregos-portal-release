"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const job_1 = require("../../models/job");
const job_2 = require("../../models/job");
const router = new transRouter_1.Router();
router.get('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const companies = yield job_1.Company.find();
    ctx.body = companies;
}));
router.get('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const company = yield job_1.Company.findOne({ _id: ctx.params.id });
    ctx.body = company;
}));
router.get('/:id/jobs', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const jobs = yield job_2.Job.find({ companyId: ctx.params.id });
    ctx.body = jobs;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=companies.js.map
