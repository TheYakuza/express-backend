const express = require('express');

const api = express.Router();

const changeController = require('@/controllers/changeController');

api.route('/change')
  .get(changeController.index)
  .post(changeController.new);

api.route('/change/healtcheck')
  .get(changeController.health);

api.route('/change/:id')
  .get(changeController.view)
  .patch(changeController.update)
  .put(changeController.update)
  .delete(changeController.delete);

module.exports = api;
