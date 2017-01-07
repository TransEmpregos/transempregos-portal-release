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
const router_1 = require("@angular/router");
const job_service_1 = require("../job.service");
let JobEditComponent = class JobEditComponent {
    constructor(jobService, route, router) {
        this.jobService = jobService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.jobService.getJobAsync(params['id']))
            .subscribe(job => this.job = job);
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.jobService.updateAsync(this.job);
            this.goBack();
        });
    }
    goBack() {
        this.router.navigate(['/admin/job']);
    }
};
JobEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-job-edit',
        templateUrl: 'job-edit.component.html'
    }),
    __metadata("design:paramtypes", [job_service_1.JobService, router_1.ActivatedRoute, router_1.Router])
], JobEditComponent);
exports.JobEditComponent = JobEditComponent;

//# sourceMappingURL=job-edit.component.js.map
