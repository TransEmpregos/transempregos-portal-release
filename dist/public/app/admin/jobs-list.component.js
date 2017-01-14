"use strict";
var tslib_1 = require("tslib");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jobs;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var yesNoModal, result, error_1, okModal;
            return tslib_1.__generator(this, function (_a) {
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
JobsListComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-jobs-list',
        templateUrl: 'jobs-list.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [job_service_1.JobService, ng_bootstrap_1.NgbModal])
], JobsListComponent);
exports.JobsListComponent = JobsListComponent;

//# sourceMappingURL=jobs-list.component.js.map
