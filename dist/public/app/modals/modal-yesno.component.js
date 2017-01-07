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
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
let ModalYesNoComponent = class ModalYesNoComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.yes = 'Sim';
        this.no = 'Não';
        this.mensagem = 'Confirma?';
        this.title = 'Transempregos';
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalYesNoComponent.prototype, "yes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalYesNoComponent.prototype, "no", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalYesNoComponent.prototype, "mensagem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalYesNoComponent.prototype, "title", void 0);
ModalYesNoComponent = __decorate([
    core_1.Component({
        selector: 'trans-modal-yes-no',
        template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('no')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body">
      <p>{{mensagem}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('no')">{{no}}</button>
      <button type="button" class="btn btn-primary" (click)="activeModal.close('yes')">{{yes}}</button>
    </div>
  `
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ModalYesNoComponent);
exports.ModalYesNoComponent = ModalYesNoComponent;

//# sourceMappingURL=modal-yesno.component.js.map
