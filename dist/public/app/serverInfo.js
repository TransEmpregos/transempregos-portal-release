"use strict";
exports.isProd = false;
if (_isProd)
    exports.isProd = true;
exports.isDown = false;
if (_isDown)
    exports.isDown = true;
exports.isUp = !exports.isDown;
exports.jobs = _jobs;

//# sourceMappingURL=serverInfo.js.map
