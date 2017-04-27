"use strict";
var company_1 = require("./company");
var Job = (function () {
    function Job() {
        var j = new company_1.Company();
        this.companyId = j._id;
    }
    return Job;
}());
exports.Job = Job;

//# sourceMappingURL=job.js.map
