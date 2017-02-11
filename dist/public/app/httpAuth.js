"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_service_1 = require("./user.service");
var HttpAuth = (function () {
    function HttpAuth(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    HttpAuth.prototype.request = function (url, options) {
        options = this.getOptions(options);
        return this.http.request(url, options);
    };
    HttpAuth.prototype.get = function (url, options) {
        options = this.getOptions(options);
        return this.http.get(url, options);
    };
    HttpAuth.prototype.post = function (url, body, options) {
        options = this.getOptions(options);
        return this.http.post(url, body, options);
    };
    HttpAuth.prototype.put = function (url, body, options) {
        options = this.getOptions(options);
        return this.http.put(url, body, options);
    };
    HttpAuth.prototype.delete = function (url, options) {
        options = this.getOptions(options);
        return this.http.delete(url, options);
    };
    HttpAuth.prototype.patch = function (url, body, options) {
        options = this.getOptions(options);
        return this.http.patch(url, body, options);
    };
    HttpAuth.prototype.head = function (url, options) {
        options = this.getOptions(options);
        return this.http.head(url, options);
    };
    HttpAuth.prototype.options = function (url, options) {
        options = this.getOptions(options);
        return this.http.options(url, options);
    };
    HttpAuth.prototype.getOptions = function (options) {
        options = options || {};
        options.headers = options.headers || new http_1.Headers();
        options.headers.append('Authorization', "Bearer " + this.userService.token);
        return options;
    };
    return HttpAuth;
}());
HttpAuth = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], HttpAuth);
exports.HttpAuth = HttpAuth;

//# sourceMappingURL=httpAuth.js.map
