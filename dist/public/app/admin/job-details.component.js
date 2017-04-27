"use strict";
var tslib_1 = require("tslib");
var company_service_1 = require("./../company.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var job_service_1 = require("../job.service");
var JobDetailsComponent = (function () {
    function JobDetailsComponent(jobService, companyService, route, router) {
        this.jobService = jobService;
        this.companyService = companyService;
        this.route = route;
        this.router = router;
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.jobService.getJobAsync(params['id']); })
            .subscribe(function (job) {
            _this.job = job;
            var empresa = _this.companyService.getCompanyAsync(job.companyId.toString());
            empresa.then(function (data) {
                _this.empresa = (data.companyName);
            });
        });
    };
    JobDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/job']);
    };
    return JobDetailsComponent;
}());
JobDetailsComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-job-details',
        templateUrl: 'job-details.component.html',
        styleUrls: ['base-test.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [job_service_1.JobService, company_service_1.CompanyService,
        router_1.ActivatedRoute, router_1.Router])
], JobDetailsComponent);
exports.JobDetailsComponent = JobDetailsComponent;

//# sourceMappingURL=job-details.component.js.map
