const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const cll = require('console-log-level');

const { env } = process;

const {
  LOGLEVEL: loglevel,
  LOGROTATION: logrotation,
} = env;

const log = () => cll({
  prefix: () => new Date().toISOString(),
  level: loglevel || 'info',
});

const accessLog = rfs('access.log', {
  interval: logrotation || '1d',
  path: 'logs',
});

const errorLog = rfs('error.log', {
  interval: logrotation || '1d',
  path: 'logs',
});

const loggerError = morgan('combined', {
  skip: (req, res) => res.statusCode < 400,
  stream: errorLog,
});

const loggerAccess = morgan('common', {
  stream: accessLog,
});

module.exports = {
  loggerError,
  loggerAccess,
  log,
};
