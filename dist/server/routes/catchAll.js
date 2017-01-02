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
const upmonitor_1 = require("../upmonitor");
const router = new _transRouter_1.Router();
router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    if (upmonitor_1.upMonitor.isDown) {
        log('Server is down because of ${upMonitor.reason}, not trying to go the database.');
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