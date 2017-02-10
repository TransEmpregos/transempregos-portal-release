"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var job_service_1 = require("../job.service");
var job_1 = require("../job");
var JobCreateComponent = (function () {
    function JobCreateComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
    }
    JobCreateComponent.prototype.ngOnInit = function () {
        this.job = new job_1.Job();
    };
    JobCreateComponent.prototype.save = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (form.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.jobService.createAsync(this.job)];
                    case 1:
                        _a.sent();
                        this.goBack();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobCreateComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/job']);
    };
    return JobCreateComponent;
}());
JobCreateComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-job-edit',
        templateUrl: 'job-edit.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [job_service_1.JobService, router_1.Router])
], JobCreateComponent);
exports.JobCreateComponent = JobCreateComponent;

//# sourceMappingURL=job-create.component.js.map
