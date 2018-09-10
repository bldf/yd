console.log('999999');
const superAgent = require('supertest');
const app = require("./app");


function request() {
    return superAgent(app.listen());
}

describe('node 接口测试', function () {
    it('test接口测试文档', function (done) {
        request()
            .get("/test")
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (res.data === '测试') {
                    done();
                } else {
                    done(err);
                }
            });
    });
});