"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const testing_1 = require("@angular/core/testing");
const platform_browser_1 = require("@angular/platform-browser");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const modal_ok_component_1 = require("./modal-ok.component");
const sinon = require("sinon");
describe('AppComponent', () => {
    let comp;
    let fixture;
    let buttonDe;
    let buttonElement;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [modal_ok_component_1.ModalOkComponent]
        }).overrideComponent(modal_ok_component_1.ModalOkComponent, {
            set: {
                providers: [
                    { provide: ng_bootstrap_1.NgbActiveModal, useValue: { close: sinon.spy() } }
                ]
            }
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(modal_ok_component_1.ModalOkComponent);
        fixture.detectChanges();
        comp = fixture.componentInstance;
        buttonDe = fixture.debugElement.query(platform_browser_1.By.css('button.btn-primary'));
        buttonElement = buttonDe.nativeElement;
    }));
    it('should display original ok button caption', () => {
        fixture.detectChanges();
        buttonElement.textContent.should.equal(comp.ok);
    });
    it('should display a different ok button caption', () => {
        comp.ok = 'Confirm';
        fixture.detectChanges();
        buttonElement.textContent.should.equal('Confirm');
    });
    it('should close with click', () => {
        buttonDe.triggerEventHandler('click', null);
        comp.activeModal.close.should.have.been.calledOnce;
    });
});

//# sourceMappingURL=modal-ok.component.spec.js.map
