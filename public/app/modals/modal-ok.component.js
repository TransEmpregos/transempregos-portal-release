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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ModalOkComponent = (function () {
    function ModalOkComponent(activeModal) {
        this.activeModal = activeModal;
        this.ok = 'OK';
        this.message = 'Booooooo!';
        this.title = 'Transempregos';
    }
    return ModalOkComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalOkComponent.prototype, "ok", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalOkComponent.prototype, "message", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalOkComponent.prototype, "title", void 0);
ModalOkComponent = __decorate([
    core_1.Component({
        selector: 'trans-modal-ok',
        template: "\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('ok')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('ok')\">{{ok}}</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ModalOkComponent);
exports.ModalOkComponent = ModalOkComponent;
//# sourceMappingURL=modal-ok.component.js.map