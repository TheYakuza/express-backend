const mongoose = require('mongoose');
const shortid = require('shortid');

const changeSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  // put your schema params here
}, {
  timestamps: true,
});


module.exports = mongoose.model('change', changeSchema);
