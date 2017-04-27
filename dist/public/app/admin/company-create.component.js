"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("./../company.service");
var company_1 = require("./../company");
var CompanyCreateComponent = (function () {
    function CompanyCreateComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
    }
    CompanyCreateComponent.prototype.ngOnInit = function () {
        this.company = new company_1.Company();
    };
    CompanyCreateComponent.prototype.save = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (form.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.companyService.createAsync(this.company)];
                    case 1:
                        _a.sent();
                        this.goBack();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyCreateComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/company']);
    };
    return CompanyCreateComponent;
}());
CompanyCreateComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-company-edit',
        templateUrl: 'company-edit.component.html',
        styleUrls: ['form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router])
], CompanyCreateComponent);
exports.CompanyCreateComponent = CompanyCreateComponent;

//# sourceMappingURL=company-create.component.js.map
