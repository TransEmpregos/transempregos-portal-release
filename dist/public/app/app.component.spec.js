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
const testing_2 = require("@angular/router/testing");
const router_stubs_1 = require("./test-support/router-stubs");
const app_component_1 = require("./app.component");
describe('AppComponent', () => {
    let comp;
    let fixture;
    let de;
    let el;
    let links;
    let linkDes;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, router_stubs_1.RouterLinkStubDirective],
            imports: [testing_2.RouterTestingModule]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
        links = linkDes.map(linkDe => linkDe.injector.get(router_stubs_1.RouterLinkStubDirective));
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('a.navbar-brand'));
        el = de.nativeElement;
    }));
    it('should display original title', () => {
        fixture.detectChanges();
        el.textContent.should.equal(comp.title);
    });
    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        el.textContent.should.equal('Test Title');
    });
    it('can get RouterLinks from template', () => {
        links.length.should.eq(2, 'should have 2 links');
        links[0].linkParams.should.equal('/', '1st link should go Home');
        links[1].linkParams.should.equal('/admin', '1st link should go to the Admin area');
    });
});

//# sourceMappingURL=app.component.spec.js.map
