"use strict";
require("./_specHelper");
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    chromeDriver: process.env.SNAP_CI ? '/usr/local/bin/chromedriver' : require('chromedriver').path,
    framework: 'mocha',
    specs: ['**/*.feature.js'],
    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        timeout: 4000
    },
    plugins: [{
            axe: {
                rules: {
                    'color-contrast': { enabled: false }
                }
            },
            chromeA11YDevTools: {
                treatWarningsAsFailures: true,
                auditConfiguration: {
                    auditRulesToRun: [
                        'ariaOnReservedElement',
                        'ariaOwnsDescendant',
                        'ariaRoleNotScoped',
                        'audioWithoutControls',
                        'badAriaAttribute',
                        'badAriaAttributeValue',
                        'badAriaRole',
                        'controlsWithoutLabel',
                        'focusableElementNotVisibleAndNotAriaHidden',
                        'humanLangMissing',
                        'imagesWithoutAltText',
                        'linkWithUnclearPurpose',
                        'mainRoleOnInappropriateElement',
                        'elementsWithMeaningfulBackgroundImage',
                        'multipleAriaOwners',
                        'multipleLabelableElementsPerLabel',
                        'pageWithoutTitle',
                        'requiredAriaAttributeMissing',
                        'requiredOwnedAriaRoleMissing',
                        'roleTooltipRequiresDescribedby',
                        'tabIndexGreaterThanZero',
                        'tableHasAppropriateHeaders',
                        'uncontrolledTabpanel',
                        'unfocusableElementsWithOnClick',
                        'unsupportedAriaAttribute',
                        'videoWithoutCaptions'
                    ],
                    auditRulesToIgnore: []
                }
            },
            package: 'protractor-accessibility-plugin'
        }],
    rootElement: 'trans-app',
    baseUrl: 'http://localhost:3000',
    useAllAngular2AppRoots: true
};

//# sourceMappingURL=protractor.config.js.map
