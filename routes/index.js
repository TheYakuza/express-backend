const express = require('express');

const routes = express();

// const router = express();

// require routes
const base = require('./base');
const change = require('./change');


// export routes
routes.use('/base', base);
routes.use('/change', change);

module.exports = { routes };
