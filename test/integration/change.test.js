const chai = require('chai');
const {
  expect,
} = require('chai');

const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

describe('Testing endpoint change', () => {
  describe('Test URL', () => {
    it('Watch base URL  ', (done) => {
      chai.request(app)
        .get('/api/change')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
