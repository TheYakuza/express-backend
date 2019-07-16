const chai = require('chai');
const {
  expect,
} = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

describe('Testing endpoint', () => {
  describe('Test Base URL', () => {
    it('Watch base URL  ', (done) => {
      chai.request(app)
        .get('/api')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('Test bad URL', () => {
    it('bad URL', (done) => {
      chai.request(app)
        .get('/api/404BadUrl')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
