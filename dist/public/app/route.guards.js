"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var LoggedInGuard = (function () {
    function LoggedInGuard(userService) {
        this.userService = userService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.userService.isLoggedIn();
    };
    return LoggedInGuard;
}());
LoggedInGuard = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], LoggedInGuard);
exports.LoggedInGuard = LoggedInGuard;
var AdminGuard = (function () {
    function AdminGuard(userService) {
        this.userService = userService;
    }
    AdminGuard.prototype.canActivate = function () {
        if (!this.userService.isLoggedIn())
            return false;
        if (this.userService.user)
            return this.userService.user.isAdmin;
        return false;
    };
    return AdminGuard;
}());
AdminGuard = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], AdminGuard);
exports.AdminGuard = AdminGuard;
var RecruiterGuard = (function () {
    function RecruiterGuard(userService) {
        this.userService = userService;
    }
    RecruiterGuard.prototype.canActivate = function () {
        if (!this.userService.isLoggedIn())
            return false;
        if (this.userService.user)
            return this.userService.user.isRecruiter;
        return false;
    };
    return RecruiterGuard;
}());
RecruiterGuard = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], RecruiterGuard);
exports.RecruiterGuard = RecruiterGuard;

//# sourceMappingURL=route.guards.js.map
