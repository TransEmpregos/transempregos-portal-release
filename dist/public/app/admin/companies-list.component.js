"use strict";
var tslib_1 = require("tslib");
var company_service_1 = require("./../company.service");
var core_1 = require("@angular/core");
var modal_yesno_component_1 = require("../modals/modal-yesno.component");
var modal_ok_component_1 = require("../modals/modal-ok.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var CompaniesListComponent = (function () {
    function CompaniesListComponent(companyService, modalService) {
        this.companyService = companyService;
        this.modalService = modalService;
        this.companies = [];
    }
    CompaniesListComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var companies;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.companyService.getAllAsync()];
                    case 1:
                        companies = _a.sent();
                        this.companies = companies;
                        return [2 /*return*/];
                }
            });
        });
    };
    CompaniesListComponent.prototype.delete = function (company) {
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
                        return [4 /*yield*/, this.companyService.deleteAsync(company._id)];
                    case 3:
                        _a.sent();
                        this.companies.splice(this.companies.indexOf(company), 1);
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
    return CompaniesListComponent;
}());
CompaniesListComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-companies-list',
        templateUrl: 'companies-list.component.html',
        styleUrls: ['base-test.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [company_service_1.CompanyService, ng_bootstrap_1.NgbModal])
], CompaniesListComponent);
exports.CompaniesListComponent = CompaniesListComponent;

//# sourceMappingURL=companies-list.component.js.map
