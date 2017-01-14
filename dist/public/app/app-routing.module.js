"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin/admin.component");
var home_component_1 = require("./home/home.component");
var login_recruiter_component_1 = require("./login/login-recruiter.component");
var login_candidate_component_1 = require("./login/login-candidate.component");
var job_edit_component_1 = require("./admin/job-edit.component");
var jobs_list_component_1 = require("./admin/jobs-list.component");
var job_create_component_1 = require("./admin/job-create.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'login/recruiter', component: login_recruiter_component_1.LoginRecruiterComponent },
    { path: 'login/candidate', component: login_candidate_component_1.LoginCandidateComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'admin/job', component: jobs_list_component_1.JobsListComponent },
    { path: 'admin/job/create', component: job_create_component_1.JobCreateComponent },
    { path: 'admin/job/:id', component: job_edit_component_1.JobEditComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
