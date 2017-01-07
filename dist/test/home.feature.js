"use strict";
const protractor_1 = require("protractor");
const chai_1 = require("chai");
describe('Home', () => {
    it('should have a title', () => {
        protractor_1.browser.get('/');
        let title = protractor_1.element(protractor_1.by.css('a.navbar-brand'));
        chai_1.expect(title.getText()).to.eventually.equal('Transempregos');
    });
});

//# sourceMappingURL=home.feature.js.map
