"use strict";
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ModalYesNoComponent = (function () {
    function ModalYesNoComponent(activeModal) {
        this.activeModal = activeModal;
        this.yes = 'Sim';
        this.no = 'Não';
        this.mensagem = 'Confirma?';
        this.title = 'Transempregos';
    }
    return ModalYesNoComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalYesNoComponent.prototype, "yes", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalYesNoComponent.prototype, "no", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalYesNoComponent.prototype, "mensagem", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ModalYesNoComponent.prototype, "title", void 0);
ModalYesNoComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'trans-modal-yes-no',
        template: "\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('no')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"modal-title\">{{title}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{mensagem}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('no')\">{{no}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('yes')\">{{yes}}</button>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ModalYesNoComponent);
exports.ModalYesNoComponent = ModalYesNoComponent;

//# sourceMappingURL=modal-yesno.component.js.map
