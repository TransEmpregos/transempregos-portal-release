"use strict";
const mongoose_1 = require("mongoose");
const JobSchema = new mongoose_1.Schema({
    name: String
});
exports.Job = mongoose_1.model('Job', JobSchema);
//# sourceMappingURL=job.js.map