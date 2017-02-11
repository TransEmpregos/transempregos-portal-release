"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var httpAuth_1 = require("./httpAuth");
require("rxjs/add/operator/toPromise");
var JobService = (function () {
    function JobService(http) {
        this.http = http;
        this.jobsUrl = 'api/jobs';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    JobService.prototype.getAllAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, jobs, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.jobsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        jobs = response.json();
                        return [2 /*return*/, jobs];
                    case 2:
                        error_1 = _a.sent();
                        console.error("An error ocurred: " + error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobService.prototype.getJobAsync = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response, job, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.jobsUrl + "/" + id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 2:
                        response = _a.sent();
                        job = response.json();
                        return [2 /*return*/, job];
                    case 3:
                        error_2 = _a.sent();
                        console.error("An error ocurred: " + error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    JobService.prototype.updateAsync = function (job) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.jobsUrl + "/" + job._id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.put(url, JSON.stringify(job), { headers: this.headers }).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error("An error ocurred: " + error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    JobService.prototype.createAsync = function (job) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.jobsUrl, JSON.stringify(job), { headers: this.headers }).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.json().data];
                    case 2:
                        error_4 = _a.sent();
                        console.error("An error ocurred: " + error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobService.prototype.deleteAsync = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.jobsUrl + "/" + id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.delete(url, { headers: this.headers }).toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.error("An error ocurred: " + error_5);
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return JobService;
}());
JobService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [httpAuth_1.HttpAuth])
], JobService);
exports.JobService = JobService;

//# sourceMappingURL=job.service.js.map
