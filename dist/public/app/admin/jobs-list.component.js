"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_1 = require("@angular/core");
var job_service_1 = require("../job.service");
var modal_yesno_component_1 = require("../modals/modal-yesno.component");
var modal_ok_component_1 = require("../modals/modal-ok.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var JobsListComponent = (function () {
    function JobsListComponent(jobService, modalService) {
        this.jobService = jobService;
        this.modalService = modalService;
        this.jobs = [];
    }
    JobsListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jobService.getAllAsync()];
                    case 1:
                        jobs = _a.sent();
                        this.jobs = jobs;
                        return [2 /*return*/];
                }
            });
        });
    };
    JobsListComponent.prototype.delete = function (job) {
        return __awaiter(this, void 0, void 0, function () {
            var yesNoModal, result, error_1, okModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        yesNoModal = this.modalService.open(modal_yesno_component_1.ModalYesNoComponent);
                        return [4 /*yield*/, yesNoModal.result];
                    case 1:
                        result = _a.sent();
                        if (result !== 'yes')
                            return [2 /*return*/];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.jobService.deleteAsync(job._id)];
                    case 3:
                        _a.sent();
                        this.jobs.splice(this.jobs.indexOf(job), 1);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        okModal = this.modalService.open(modal_ok_component_1.ModalOkComponent);
                        okModal.componentInstance.message = 'Erro ao excluir.';
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return JobsListComponent;
}());
JobsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-jobs-list',
        templateUrl: 'jobs-list.component.html'
    }),
    __metadata("design:paramtypes", [job_service_1.JobService, ng_bootstrap_1.NgbModal])
], JobsListComponent);
exports.JobsListComponent = JobsListComponent;
//# sourceMappingURL=jobs-list.component.js.map