"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var httpAuth_1 = require("./httpAuth");
require("rxjs/add/operator/toPromise");
var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.companiesUrl = 'api/companies';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CompanyService.prototype.getAllAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, companies, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.companiesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        companies = response.json();
                        return [2 /*return*/, companies];
                    case 2:
                        error_1 = _a.sent();
                        console.error("An error ocurred: " + error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.getCompanyAsync = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response, company, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.companiesUrl + "/" + id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 2:
                        response = _a.sent();
                        company = response.json();
                        return [2 /*return*/, company];
                    case 3:
                        error_2 = _a.sent();
                        console.error("An error ocurred: " + error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.getAllCompanyJobsAsync = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response, companyJobs, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.companiesUrl + "/" + id + "/jobs";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 2:
                        response = _a.sent();
                        companyJobs = response.json();
                        return [2 /*return*/, companyJobs];
                    case 3:
                        error_3 = _a.sent();
                        console.error("An error ocurred: " + error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.updateAsync = function (company) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.companiesUrl + "/" + company._id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.put(url, JSON.stringify(company), { headers: this.headers }).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.error("An error ocurred: " + error_4);
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.createAsync = function (company) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.companiesUrl, JSON.stringify(company), { headers: this.headers }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.json().data];
                    case 2:
                        error_5 = _a.sent();
                        console.error("An error ocurred: " + error_5);
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.deleteAsync = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, error_6;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.companiesUrl + "/" + id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.delete(url, { headers: this.headers }).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _a.sent();
                        console.error("An error ocurred: " + error_6);
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CompanyService;
}());
CompanyService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [httpAuth_1.HttpAuth])
], CompanyService);
exports.CompanyService = CompanyService;

//# sourceMappingURL=company.service.js.map
