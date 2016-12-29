"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var JobService = (function () {
    function JobService(http) {
        this.http = http;
        this.jobsUrl = 'api/jobs';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    JobService.prototype.getAllAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, jobs, error_1;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var url, response, job, error_2;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var url, error_3;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var url, error_5;
            return __generator(this, function (_a) {
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
JobService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map