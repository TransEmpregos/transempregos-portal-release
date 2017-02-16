"use strict";
const tslib_1 = require("tslib");
const protractor_1 = require("protractor");
describe('Home', () => {
    it('should have find jobs call', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get('/');
        let title = protractor_1.element.all(protractor_1.by.css('.title-aside-description'));
        yield title.get(0).getText().should.eventually.equal('Diversidade de talentos para um mundo de oportunidades');
    }));
});

//# sourceMappingURL=home.feature.js.map
