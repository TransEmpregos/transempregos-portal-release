"use strict";
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const config_2 = require("../config");
const saltWorkFactor = 10;
const UserSchema = new mongoose_1.Schema({
    userName: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    isRecruiter: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false }
});
UserSchema.pre('save', function (next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (!user.isModified('password'))
            return next();
        try {
            const salt = yield bcryptjs_1.genSalt(saltWorkFactor);
            const theHash = yield bcryptjs_1.hash(user.password, salt);
            user.password = theHash;
            next();
        }
        catch (err) {
            return next(err);
        }
    });
});
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function loginAsync(user) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const User = this;
        let dbUser;
        if (user.userNameOrEmail.match(regexEmail)) {
            dbUser = yield User.findOne({ email: user.userNameOrEmail });
        }
        else {
            dbUser = yield User.findOne({ userName: user.userNameOrEmail });
        }
        const isMatch = yield bcryptjs_1.compare(user.password, dbUser.password);
        if (isMatch) {
            const simpleUser = dbUser.toObject({ versionKey: false });
            delete simpleUser['password'];
            return {
                user: simpleUser,
                token: jsonwebtoken_1.sign({
                    user: simpleUser,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
                }, config_1.secretKey)
            };
        }
        return null;
    });
}
;
function findOneSafe(conditions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const User = this;
        const user = yield User.findOne(conditions);
        if (!user)
            return null;
        const safeUser = user.toSafe();
        return safeUser;
    });
}
function seed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const User = this;
        let admin = yield User.findOne({ $or: [{ userName: 'admin' }, { email: 'admin@transempregos.com.br' }] });
        if (admin)
            return;
        log('Creating admin user...');
        admin = new User({
            userName: 'admin',
            email: 'admin@transempregos.com.br',
            password: config_2.adminPassword,
            name: 'admin',
            isRecruiter: true,
            isAdmin: true
        });
        yield admin.save();
        log('Admin user created.');
    });
}
function toSafe() {
    const self = this;
    const fullUser = self.toObject();
    const safeUser = tslib_1.__assign({}, fullUser);
    delete safeUser.password;
    return safeUser;
}
UserSchema.statics.loginAsync = loginAsync;
UserSchema.statics.findOneSafe = findOneSafe;
UserSchema.statics.seed = seed;
UserSchema.methods.toSafe = toSafe;
exports.User = mongoose_1.model('User', UserSchema);

//# sourceMappingURL=user.js.map
