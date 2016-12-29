"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Router = require("koa-router");
const job_1 = require("../models/job");
const router = new Router();
router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    const jobs = yield job_1.Job.find();
    yield ctx.render('index', { jobs: jobs });
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=catchAll.js.map