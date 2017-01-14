"use strict";
var _this = this;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
var router_stubs_1 = require("./test-support/router-stubs");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var links;
    var linkDes;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [app_component_1.AppComponent, router_stubs_1.RouterLinkStubDirective],
                        imports: [testing_2.RouterTestingModule]
                    }).compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    fixture.detectChanges();
                    linkDes = fixture.debugElement
                        .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
                    links = linkDes.map(function (linkDe) { return linkDe.injector.get(router_stubs_1.RouterLinkStubDirective); });
                    comp = fixture.componentInstance;
                    de = fixture.debugElement.query(platform_browser_1.By.css('img.header-logo'));
                    el = de.nativeElement;
                    return [2 /*return*/];
            }
        });
    }); });
    it('should display original title', function () {
        fixture.detectChanges();
        el.attributes['alt'].value.should.equal("Logo " + comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        el.attributes['alt'].value.should.equal('Logo Test Title');
    });
    it('can get RouterLinks from template', function () {
        links.length.should.eq(5, 'should have 5 links');
        links[0].linkParams.should.equal('/', '1st link should go Home');
        links[1].linkParams.should.equal('/sobre', '1st link should go to the About area');
    });
});

//# sourceMappingURL=app.component.spec.js.map
