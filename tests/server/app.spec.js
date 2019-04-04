const superagent = require('supertest');
const app = require('./app.js');

function req() {
    return superagent(app.listen());
}

describe('node 接口测试', () => {
    it('data 接口测试', done => {
        req()
            .get('/data')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) {
                    done(err);
                }

                if (res.body.name === 'jqx') {
                    done();
                } else {
                    done(new Error('名字错误'));
                }
            })
    })
})