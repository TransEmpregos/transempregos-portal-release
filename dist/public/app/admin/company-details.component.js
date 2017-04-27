"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("../company.service");
var CompanyDetailsComponent = (function () {
    function CompanyDetailsComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.companyService.getCompanyAsync(params['id']); })
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/company']);
    };
    return CompanyDetailsComponent;
}());
CompanyDetailsComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-company-details',
        templateUrl: 'company-details.component.html',
        styleUrls: ['base-test.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute, router_1.Router])
], CompanyDetailsComponent);
exports.CompanyDetailsComponent = CompanyDetailsComponent;

//# sourceMappingURL=company-details.component.js.map
