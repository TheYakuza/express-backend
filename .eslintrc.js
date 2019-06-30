module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', '.'],
      ],
    },
  },
  extends: 'airnbnb-base',
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
  },
};
