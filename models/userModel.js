const mongoose = require('mongoose');
const shortid = require('shortid');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: String,
  username: String,
  password: String,
  email: String,
  picture: String,
  description: String,
  // put your schema params here
}, {
  timestamps: true,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
