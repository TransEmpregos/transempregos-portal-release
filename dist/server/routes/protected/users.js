"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const user_1 = require("../../models/user");
const pick = require('lodash/pick');
const router = new transRouter_1.Router();
router.put('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const loggedInUser = ctx.state.user.user;
    if (loggedInUser._id !== ctx.params.id) {
        ctx.status = 404;
        return;
    }
    const newUserValues = pick(ctx.request.body, 'name');
    const user = yield user_1.User.findOneAndUpdate({ _id: ctx.params.id }, { $set: newUserValues }, { runValidators: true, new: true });
    if (!user) {
        ctx.status = 404;
        return;
    }
    const safeUser = user.toSafe();
    ctx.body = safeUser;
}));
router.get('/:id', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const loggedInUser = ctx.state.user.user;
    if (loggedInUser._id !== ctx.params.id) {
        ctx.status = 404;
        return;
    }
    const user = yield user_1.User.findOneSafe({ _id: ctx.params.id });
    if (!user)
        ctx.status = 404;
    ctx.body = user;
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=users.js.map
