"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var job_service_1 = require("../job.service");
var JobEditComponent = (function () {
    function JobEditComponent(jobService, route, router) {
        this.jobService = jobService;
        this.route = route;
        this.router = router;
    }
    JobEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.jobService.getJobAsync(params['id']); })
            .subscribe(function (job) { return _this.job = job; });
    };
    JobEditComponent.prototype.save = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jobService.updateAsync(this.job)];
                    case 1:
                        _a.sent();
                        this.goBack();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobEditComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/job']);
    };
    return JobEditComponent;
}());
JobEditComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-job-edit',
        templateUrl: 'job-edit.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [job_service_1.JobService, router_1.ActivatedRoute, router_1.Router])
], JobEditComponent);
exports.JobEditComponent = JobEditComponent;

//# sourceMappingURL=job-edit.component.js.map
