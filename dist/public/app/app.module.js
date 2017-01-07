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
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const job_service_1 = require("./job.service");
const app_component_1 = require("./app.component");
const admin_component_1 = require("./admin/admin.component");
const job_edit_component_1 = require("./admin/job-edit.component");
const jobs_list_component_1 = require("./admin/jobs-list.component");
const job_create_component_1 = require("./admin/job-create.component");
const modal_yesno_component_1 = require("./modals/modal-yesno.component");
const modal_ok_component_1 = require("./modals/modal-ok.component");
const home_component_1 = require("./home.component");
const app_routing_module_1 = require("./app-routing.module");
require("./rxjs-extensions");
let AppModule = class AppModule {
};
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
