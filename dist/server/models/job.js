"use strict";
const mongoose_1 = require("mongoose");
const CompanySchema = new mongoose_1.Schema({
    companyName: { type: String, required: true },
    comercialName: { type: String, required: true },
    showCompany: Boolean,
    governmentId: { type: String,
        validate: {
            validator: function (v) {
                return /\d{2}.?\d{3}.?\d{3}\/?\d{4}-?\d{2}/.test(v);
            },
            message: '{VALUE} is not a valid governmentId!'
        },
        required: [true, 'User governmentId number required']
    },
    contactEmail: { type: String, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String,
        validate: {
            validator: function (v) {
                return /\(?\d{2}\)?\d{4,5}-?\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    }
});
const JobSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    howToSubscribe: { type: String, required: true },
    salaryRange: { type: String, required: true },
    opportunityType: { type: String, required: true },
    contractType: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    companyId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Company', required: true }
});
exports.Company = mongoose_1.model('Company', CompanySchema);
exports.Job = mongoose_1.model('Job', JobSchema);

//# sourceMappingURL=job.js.map
