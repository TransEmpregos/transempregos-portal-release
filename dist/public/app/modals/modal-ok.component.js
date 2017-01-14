"use strict";
var tslib_1 = require("tslib");
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
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalOkComponent.prototype, "ok", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalOkComponent.prototype, "message", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalOkComponent.prototype, "title", void 0);
ModalOkComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'trans-modal-ok',
        template: "\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('ok')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('ok')\">{{ok}}</button>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ModalOkComponent);
exports.ModalOkComponent = ModalOkComponent;

//# sourceMappingURL=modal-ok.component.js.map
