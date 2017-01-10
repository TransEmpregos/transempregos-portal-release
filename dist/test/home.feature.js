"use strict";
const protractor_1 = require("protractor");
const chai_1 = require("chai");
describe('Home', () => {
    it('should have find jobs call', () => {
        protractor_1.browser.get('/');
        let title = protractor_1.element(protractor_1.by.css('.home-text-for-recruiter'));
        chai_1.expect(title.getText()).to.eventually.equal('Encontre vagas para o seu talento.');
    });
});

//# sourceMappingURL=home.feature.js.map
