require('module-alias/register');
require('dotenv').config();

const should = require('should');
const mongoose = require('mongoose');

const User = require('@/models/userModel');

const {
  DBUSER: dbuser,
  DBPASS: dbpass,
  DBHOST: dbhost,
} = process.env;

const dburi = `mongodb+srv://${dbuser}:${dbpass}@${dbhost}/test`;

describe('Account', () => {
  before((done) => {
    // db = mongoose.connect(dburi);
    done();
  });
  after((done) => {
    mongoose.connection.close();
    done();
  });
  beforeEach((done) => {
    const user = new User({
      username: 'testuser',
      password: 'pass1234',
    });
    user.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('no error');
      }
      done();
    });
  });
  it('find user by username', (done) => {
    User.findOne({ username: 'testuser' }, (err, account) => {
      account.username.should.eql('testuser');
      console.log(' username: ', account.username);
      done();
    });
  });
  afterEach((done) => {
    User.deleteMany({}, () => {
      done();
    });
  });
});
