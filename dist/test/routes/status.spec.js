"use strict";
const status_1 = require("../../server/routes/status");
const upmonitor_1 = require("../../server/upmonitor");
const request = require("supertest");
const Koa = require("koa");
const http = require("http");
describe('Status route', () => {
    it('should be down by default', done => {
        upmonitor_1.upMonitor.reset();
        const app = new Koa();
        app.use(status_1.statusRouter.routes());
        const server = request.agent(http.createServer(app.callback()));
        server.get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(503, {
            status: 'Server is down because \'Not yet initialized.\''
        }, done);
    });
    it('should be up after upMonitor is set', done => {
        upmonitor_1.upMonitor.set({ up: true }, 'Test');
        const app = new Koa();
        app.use(status_1.statusRouter.routes());
        const server = request.agent(http.createServer(app.callback()));
        server.get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, {
            status: 'ok'
        }, done);
    });
    it('should be down by default (direct call)', () => {
        upmonitor_1.upMonitor.reset();
        const method = status_1.statusRouter.findRoute('/');
        let ctx = {};
        method(ctx, null);
        ctx.status.should.eql(503);
        ctx.body.should.eql({ status: 'Server is down because \'Not yet initialized.\'' });
    });
    it('should be up after upMonitor is set (direct call)', () => {
        upmonitor_1.upMonitor.set({ up: true }, 'Test');
        const method = status_1.statusRouter.findRoute('/');
        let ctx = {};
        method(ctx, null);
        ctx.status.should.eql(200);
        ctx.body.should.eql({ status: 'ok' });
    });
});
//# sourceMappingURL=status.spec.js.map