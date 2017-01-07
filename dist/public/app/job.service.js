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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let JobService = class JobService {
    constructor(http) {
        this.http = http;
        this.jobsUrl = 'api/jobs';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    getAllAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.http.get(this.jobsUrl).toPromise();
                const jobs = response.json();
                return jobs;
            }
            catch (error) {
                console.error(`An error ocurred: ${error}`);
                throw error;
            }
        });
    }
    getJobAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.jobsUrl}/${id}`;
            try {
                const response = yield this.http.get(url).toPromise();
                const job = response.json();
                return job;
            }
            catch (error) {
                console.error(`An error ocurred: ${error}`);
                throw error;
            }
        });
    }
    updateAsync(job) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.jobsUrl}/${job._id}`;
            try {
                yield this.http.put(url, JSON.stringify(job), { headers: this.headers }).toPromise();
            }
            catch (error) {
                console.error(`An error ocurred: ${error}`);
                throw error;
            }
        });
    }
    createAsync(job) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.http.post(this.jobsUrl, JSON.stringify(job), { headers: this.headers }).toPromise();
                return result.json().data;
            }
            catch (error) {
                console.error(`An error ocurred: ${error}`);
                throw error;
            }
        });
    }
    deleteAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.jobsUrl}/${id}`;
            try {
                yield this.http.delete(url, { headers: this.headers }).toPromise();
            }
            catch (error) {
                console.error(`An error ocurred: ${error}`);
                throw error;
            }
        });
    }
};
JobService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JobService);
exports.JobService = JobService;

//# sourceMappingURL=job.service.js.map
