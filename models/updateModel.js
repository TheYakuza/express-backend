const mongoose = require('mongoose');

const commerceSchema = mongoose.Schema({
  commerce_id: String,
});

const healthcheckSchema = mongoose.Schema({
  healthcheck_id: String,
});

const updateSchema = mongoose.Schema({
  commerce: [commerceSchema],
  healthcheck: healthcheckSchema,
}, {
  timestamps: true,
});

module.exports = mongoose.model('update', updateSchema);
