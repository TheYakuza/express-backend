const whiteList = [
  'http://localhost',
  'http://*.local',
  'http://localhost:8080',
  'https://localhost:80',
  'http://localhost:9000',
  'http://localhost:3005',
  'https://localhost:3005',
  process.env.URL_FRONTEND,
];

const options = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    }
    callback(new Error('Not Allowed by CORS'));
  },
  optionSuccessStatus: process.env.OPTION_SUCCESS || 204,
};

module.exports = options;
