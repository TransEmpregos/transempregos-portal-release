"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../user.service");
var LoginCandidateComponent = (function () {
    function LoginCandidateComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            userNameOrEmail: null,
            password: null,
            persist: false
        };
    }
    LoginCandidateComponent.prototype.ngOnInit = function () {
        this.tryToGoHome();
    };
    LoginCandidateComponent.prototype.loginAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(1111, this.user.userNameOrEmail, this.user.password);
                        if (!(this.user.userNameOrEmail && this.user.password)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.loginAsync(this.user.userNameOrEmail, this.user.password)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.tryToGoHome();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginCandidateComponent.prototype.tryToGoHome = function () {
        if (this.userService.isLoggedIn())
            this.router.navigate(['']);
    };
    return LoginCandidateComponent;
}());
LoginCandidateComponent = tslib_1.__decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trans-login-candidate',
        templateUrl: 'login-candidate.component.html',
        styleUrls: ['login-user.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginCandidateComponent);
exports.LoginCandidateComponent = LoginCandidateComponent;

//# sourceMappingURL=login-candidate.component.js.map
