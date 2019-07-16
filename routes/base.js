const express = require('express');

const api = express();

const baseController = require('@/controllers/baseController');

api.route('/health')
  .get(baseController.health);

// api.route('/')
//   .get(baseController.index)
//   .post(baseController.new);
//
// api.route('/:id')
//   .get(baseController.view)
//   .patch(baseController.update)
//   .put(baseController.update)
//   .delete(baseController.delete);

module.exports = api;
