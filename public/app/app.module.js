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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var job_service_1 = require("./job.service");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./admin/admin.component");
var job_edit_component_1 = require("./admin/job-edit.component");
var jobs_list_component_1 = require("./admin/jobs-list.component");
var job_create_component_1 = require("./admin/job-create.component");
var modal_yesno_component_1 = require("./modals/modal-yesno.component");
var modal_ok_component_1 = require("./modals/modal-ok.component");
var home_component_1 = require("./home.component");
var app_routing_module_1 = require("./app-routing.module");
require("./rxjs-extensions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            admin_component_1.AdminComponent,
            home_component_1.HomeComponent,
            job_edit_component_1.JobEditComponent,
            jobs_list_component_1.JobsListComponent,
            job_create_component_1.JobCreateComponent,
            modal_yesno_component_1.ModalYesNoComponent,
            modal_ok_component_1.ModalOkComponent
        ],
        providers: [job_service_1.JobService],
        entryComponents: [modal_yesno_component_1.ModalYesNoComponent, modal_ok_component_1.ModalOkComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map