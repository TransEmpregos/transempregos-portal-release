"use strict";
const protractor_1 = require("protractor");
const chai_1 = require("chai");
describe('Home', () => {
    it('should have find jobs call', () => {
        protractor_1.browser.get('/');
        let title = protractor_1.element.all(protractor_1.by.css('.title-aside-description'));
        chai_1.expect(title.get(0).getText()).to.eventually.equal('Diversidade de talentos para um mundo de oportunidades');
    });
});

//# sourceMappingURL=home.feature.js.map
