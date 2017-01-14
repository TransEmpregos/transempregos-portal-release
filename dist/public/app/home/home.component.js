"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.areaFormHome = 'candidate';
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.setAreaFormHome = function (role) {
        this.areaFormHome = role;
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
