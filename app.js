require('module-alias/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);


// const corsOptions = require('@/etc/corsConfig');
const { connectDB: db } = require('@/etc/dbConfig');

db();

const { msg } = require('@/lib/messages');

const routes = require('@/routes/index');

const { env } = process;

const {
  PORT: port,
  NODE_ENV: nodeEnv,
  SALT: secret,
  HOST: host,
} = env;

app.set('Secret', secret);

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
app.use(expressSession({
  secret,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

const Account = require('@/models/userModel');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: `${host}:${port}`,
    basePath: '/api',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname, // app absolute path
  files: ['./routes/*.js'], // Path to the API handle folder
};

expressSwagger(options);

app.listen(port || 3000, () => {
  log().info(msg.server, host, port, nodeEnv);
});

module.exports = app;
