"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var angular_2_local_storage_1 = require("angular-2-local-storage");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    function UserService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.loggedIn = false;
        if (this._token && this._user)
            this.loggedIn = true;
    }
    UserService.prototype.loginAsync = function (userNameOrEmail, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var headers, res, error_1, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.loggedIn)
                            return [2 /*return*/];
                        headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http
                                .post('/api/login', JSON.stringify({ userNameOrEmail: userNameOrEmail, password: password }), { headers: headers })
                                .toPromise()];
                    case 2:
                        res = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/];
                    case 4:
                        resp = res.json();
                        if (!resp.user)
                            return [2 /*return*/];
                        this._token = resp.token;
                        this._user = resp.user;
                        this.loggedIn = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        this._token = null;
        this._user = null;
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "_user", {
        get: function () {
            return this.localStorageService.get('user');
        },
        set: function (u) {
            if (u == null)
                this.localStorageService.remove('user');
            else
                this.localStorageService.set('user', u);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "_token", {
        get: function () {
            return this.localStorageService.get('auth_token');
        },
        set: function (t) {
            if (t == null)
                this.localStorageService.remove('auth_token');
            else
                this.localStorageService.set('auth_token', t);
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http, angular_2_local_storage_1.LocalStorageService])
], UserService);
exports.UserService = UserService;

//# sourceMappingURL=user.service.js.map
