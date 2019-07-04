const mongoose = require('mongoose');

const healthcheckSchema = mongoose.Schema({
  component: String,
  status: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model('healthcheck', healthcheckSchema);
