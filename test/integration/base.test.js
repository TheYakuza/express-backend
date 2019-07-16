const chai = require('chai');
const {
  expect,
} = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

describe('Testing endpoint base', () => {
  describe('Test URL', () => {
    it('Watch base healthcheck', (done) => {
      chai.request(app)
        .get('/api/base/health')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Watch base URL', (done) => {
      chai.request(app)
        .get('/api/base')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
