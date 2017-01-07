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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const admin_component_1 = require("./admin/admin.component");
const home_component_1 = require("./home.component");
const job_edit_component_1 = require("./admin/job-edit.component");
const jobs_list_component_1 = require("./admin/jobs-list.component");
const job_create_component_1 = require("./admin/job-create.component");
const routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'admin/job', component: jobs_list_component_1.JobsListComponent },
    { path: 'admin/job/create', component: job_create_component_1.JobCreateComponent },
    { path: 'admin/job/:id', component: job_edit_component_1.JobEditComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
