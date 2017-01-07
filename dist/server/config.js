"use strict";
class Config {
}
Config.nodeEnv = process.env.NODE_ENV || 'development';
Config.isDevEnv = Config.nodeEnv === 'development';
Config.isTestEnv = Config.nodeEnv === 'test';
Config.isProdEnv = Config.nodeEnv === 'production';
exports.Config = Config;
log(`Environment is '${Config.nodeEnv}'`);

//# sourceMappingURL=config.js.map
