const express = require('express');

const api = express.Router();

const baseController = require('@/controllers/baseController');

console.log('entra a ruta');
api.route('/base/healtcheck')
  .get(baseController.health);

module.exports = api;
