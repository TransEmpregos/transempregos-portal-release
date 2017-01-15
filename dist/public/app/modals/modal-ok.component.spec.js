"use strict";
var _this = this;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var modal_ok_component_1 = require("./modal-ok.component");
var sinon = require("sinon");
describe('AppComponent', function () {
    var comp;
    var fixture;
    var buttonDe;
    var buttonElement;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [modal_ok_component_1.ModalOkComponent]
                    }).overrideComponent(modal_ok_component_1.ModalOkComponent, {
                        set: {
                            providers: [
                                { provide: ng_bootstrap_1.NgbActiveModal, useValue: { close: sinon.spy() } }
                            ]
                        }
                    }).compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(modal_ok_component_1.ModalOkComponent);
                    fixture.detectChanges();
                    comp = fixture.componentInstance;
                    buttonDe = fixture.debugElement.query(platform_browser_1.By.css('button.btn-primary'));
                    buttonElement = buttonDe.nativeElement;
                    return [2 /*return*/];
            }
        });
    }); });
    it('should display original ok button caption', function () {
        fixture.detectChanges();
        if (buttonElement == null || buttonElement.textContent == null)
            throw new Error('Button element textContent should have a value.');
        buttonElement.textContent.should.equal(comp.ok);
    });
    it('should display a different ok button caption', function () {
        comp.ok = 'Confirm';
        fixture.detectChanges();
        if (buttonElement == null || buttonElement.textContent == null)
            throw new Error('Button element textContent should have a value.');
        buttonElement.textContent.should.equal('Confirm');
    });
    it('should close with click', function () {
        buttonDe.triggerEventHandler('click', null);
        comp.activeModal.close.should.have.been.calledOnce;
    });
});

//# sourceMappingURL=modal-ok.component.spec.js.map
