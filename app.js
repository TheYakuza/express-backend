require('module-alias/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { msg } = require('@/lib/messages');

const routes = require('@/routes/index');

const { env } = process;

const {
  PORT: port,
  NODE_ENV: nodeEnv,
} = env;

const app = express();

// const corsOptions = require('@/etc/corsConfig');
const { connectDB: db } = require('@/etc/dbConfig');
const {
  log,
  loggerError: errors,
  loggerAccess: access,
} = require('@/etc/logConfig');

app.use(cors());
app.use(errors);
app.use(access);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', routes);

db();

app.listen(port || 3000, () => {
  log().info(msg.server, port, nodeEnv);
});

module.exports = app;
