"use strict";
const tslib_1 = require("tslib");
const transRouter_1 = require("../transRouter");
const user_1 = require("../../models/user");
const router = new transRouter_1.Router();
router.post('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const { userNameOrEmail, password } = ctx.request.body;
    if (!userNameOrEmail || !password) {
        return failLogin(ctx);
    }
    const user = yield user_1.User.loginAsync({ userNameOrEmail, password });
    if (user) {
        ctx.body = user;
        ctx.status = 200;
    }
    else {
        return failLogin(ctx);
    }
}));
function failLogin(ctx) {
    ctx.status = 404;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;

//# sourceMappingURL=login.js.map
