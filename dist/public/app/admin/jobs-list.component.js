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
const job_service_1 = require("../job.service");
const modal_yesno_component_1 = require("../modals/modal-yesno.component");
const modal_ok_component_1 = require("../modals/modal-ok.component");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
let JobsListComponent = class JobsListComponent {
    constructor(jobService, modalService) {
        this.jobService = jobService;
        this.modalService = modalService;
        this.jobs = [];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const jobs = yield this.jobService.getAllAsync();
            this.jobs = jobs;
        });
    }
    delete(job) {
        return __awaiter(this, void 0, void 0, function* () {
            const yesNoModal = this.modalService.open(modal_yesno_component_1.ModalYesNoComponent);
            const result = yield yesNoModal.result;
            if (result !== 'yes')
                return;
            try {
                yield this.jobService.deleteAsync(job._id);
                this.jobs.splice(this.jobs.indexOf(job), 1);
            }
            catch (error) {
                const okModal = this.modalService.open(modal_ok_component_1.ModalOkComponent);
                okModal.componentInstance.message = 'Erro ao excluir.';
            }
        });
    }
};
JobsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-admin-jobs-list',
        templateUrl: 'jobs-list.component.html'
    }),
    __metadata("design:paramtypes", [job_service_1.JobService, ng_bootstrap_1.NgbModal])
], JobsListComponent);
exports.JobsListComponent = JobsListComponent;

//# sourceMappingURL=jobs-list.component.js.map
