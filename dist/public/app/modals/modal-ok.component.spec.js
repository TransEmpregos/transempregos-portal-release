"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
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
        buttonElement.textContent.should.equal(comp.ok);
    });
    it('should display a different ok button caption', function () {
        comp.ok = 'Confirm';
        fixture.detectChanges();
        buttonElement.textContent.should.equal('Confirm');
    });
    it('should close with click', function () {
        buttonDe.triggerEventHandler('click', null);
        comp.activeModal.close.should.have.been.calledOnce;
    });
});

//# sourceMappingURL=modal-ok.component.spec.js.map
