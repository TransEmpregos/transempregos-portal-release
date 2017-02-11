"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const user_1 = require("../../models/user");
const router = new transRouter_1.Router();
router.post('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const user = new user_1.User(ctx.request.body);
    user.isAdmin = false;
    const existingUser = yield user_1.User.findOne({ $or: [{ userName: user.userName }, { email: user.email }] });
    if (existingUser) {
        ctx.status = 400;
        return;
    }
    yield user.save();
    ctx.body = user.toSafe();
}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=users.js.map
