"use strict";
class UpMonitor {
    constructor() {
        this.up = false;
    }
    get isUp() { return this.up; }
    get isDown() { return !this.up; }
    get reason() { return this._reason; }
    set(state, reason) {
        if (typeof state === 'boolean')
            this.up = state;
        else if (typeof state.up !== 'undefined')
            this.up = state.up;
        else if (typeof state.down !== 'undefined')
            this.up = !state.down;
        this._reason = reason;
    }
}
exports.upMonitor = new UpMonitor();
//# sourceMappingURL=upmonitor.js.map