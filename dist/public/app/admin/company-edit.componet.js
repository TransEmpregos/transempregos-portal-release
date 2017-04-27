"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("../company.service");
var CompanyEditComponent = (function () {
    function CompanyEditComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.companyService.getCompanyAsync(params['id']); })
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyEditComponent.prototype.save = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (form.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.companyService.updateAsync(this.company)];
                    case 1:
                        _a.sent();
                        this.goBack();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyEditComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/company']);
    };
    return CompanyEditComponent;
}());
CompanyEditComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-company-edit',
        templateUrl: 'company-edit.component.html',
        styleUrls: ['form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute, router_1.Router])
], CompanyEditComponent);
exports.CompanyEditComponent = CompanyEditComponent;

//# sourceMappingURL=company-edit.componet.js.map
