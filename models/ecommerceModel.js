const mongoose = require('mongoose');
const shortid = require('shortid');

const commerceSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: String,
  language: String,
  version: String,
}, {
  timestamps: true,
});


module.exports = mongoose.model('commerce', commerceSchema);
