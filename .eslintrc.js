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
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  "overrides": [
    {
      "files": ["**/*.test.js"],
      "rules": {
        "no-undef": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  rules: {
    'no-console': 0,
  },
};
