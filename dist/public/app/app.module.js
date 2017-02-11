"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var httpAuth_1 = require("./httpAuth");
var job_service_1 = require("./job.service");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./admin/admin.component");
var job_edit_component_1 = require("./admin/job-edit.component");
var jobs_list_component_1 = require("./admin/jobs-list.component");
var job_create_component_1 = require("./admin/job-create.component");
var modal_yesno_component_1 = require("./modals/modal-yesno.component");
var modal_ok_component_1 = require("./modals/modal-ok.component");
var home_component_1 = require("./home/home.component");
var login_recruiter_component_1 = require("./login/login-recruiter.component");
var login_candidate_component_1 = require("./login/login-candidate.component");
var app_routing_module_1 = require("./app-routing.module");
var route_guards_1 = require("./route.guards");
var user_service_1 = require("./user.service");
require("./rxjs-extensions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            app_routing_module_1.AppRoutingModule,
            angular_2_local_storage_1.LocalStorageModule.withConfig({
                prefix: 'trans-app',
                storageType: 'localStorage'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            admin_component_1.AdminComponent,
            home_component_1.HomeComponent,
            login_recruiter_component_1.LoginRecruiterComponent,
            login_candidate_component_1.LoginCandidateComponent,
            job_edit_component_1.JobEditComponent,
            jobs_list_component_1.JobsListComponent,
            job_create_component_1.JobCreateComponent,
            modal_yesno_component_1.ModalYesNoComponent,
            modal_ok_component_1.ModalOkComponent
        ],
        providers: [httpAuth_1.HttpAuth, job_service_1.JobService, user_service_1.UserService, route_guards_1.AdminGuard, route_guards_1.LoggedInGuard, route_guards_1.RecruiterGuard],
        entryComponents: [modal_yesno_component_1.ModalYesNoComponent, modal_ok_component_1.ModalOkComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
