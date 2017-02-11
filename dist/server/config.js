"use strict";
exports.nodeEnv = process.env.NODE_ENV || 'development';
exports.isDevEnv = exports.nodeEnv === 'development';
exports.isTestEnv = exports.nodeEnv === 'test';
exports.isProdEnv = exports.nodeEnv === 'production';
exports.secretKey = (() => {
    let key = process.env.SECRET_KEY;
    if (key)
        return key;
    if (exports.isProdEnv)
        throw new Error('Secret key is missing.');
    return exports.nodeEnv;
})();
exports.adminPassword = (() => {
    let password = process.env.ADMIN_PASSWORD;
    if (password)
        return password;
    if (exports.isProdEnv)
        throw new Error('Admin password is missing.');
    return 'admin';
})();
log(`Environment is '${exports.nodeEnv}'`);

//# sourceMappingURL=config.js.map
