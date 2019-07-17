const chai = require('chai');
const {
  expect,
} = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

describe('Testing endpoint user', () => {
  describe('Test URL', () => {
    it('Test Healthcheck', (done) => {
      chai.request(app)
        .get('/api/user/health')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Watch base URL', (done) => {
      chai.request(app)
        .get('/api/user')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
