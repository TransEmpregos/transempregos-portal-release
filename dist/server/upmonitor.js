"use strict";
class UpMonitor {
    constructor() {
        this._up = false;
        this._reason = 'Not yet initialized.';
    }
    get isUp() { return this._up; }
    get isDown() { return !this._up; }
    get reason() { return this._reason; }
    reset() {
        this._up = false;
        this._reason = 'Not yet initialized.';
    }
    set(state, reason) {
        if (typeof state === 'boolean')
            this._up = state;
        else if (typeof state.up !== 'undefined')
            this._up = state.up;
        else if (typeof state.down !== 'undefined')
            this._up = !state.down;
        this._reason = reason;
    }
}
exports.upMonitor = new UpMonitor();

//# sourceMappingURL=upmonitor.js.map
