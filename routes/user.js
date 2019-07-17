const express = require('express');
const passport = require('passport');

const api = express();

const userController = require('@/controllers/userController');

api.route('/')
  .post(userController.new);

api.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

api.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

api.route('/health')
  .get(userController.health);

api.route('/:id')
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);

module.exports = api;
