"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const job_1 = require("../../models/job");
const router = new transRouter_1.Router();
router.del('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield job_1.Company.findOneAndRemove({ _id: ctx.params.id });
    ctx.status = 204;
}));
router.post('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    let company = new job_1.Company(ctx.request.body);
    yield company.save();
    ctx.body = company;
}));
router.put('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield job_1.Company.findOneAndUpdate({ _id: ctx.params.id }, ctx.request.body, { runValidators: true });
    const company = yield job_1.Company.findOne({ _id: ctx.params.id });
    ctx.body = company;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=companies.js.map
