require('module-alias/register');
require('dotenv').config();

module.exports = (plop) => {
  plop.setGenerator('Model builder', {
    prompts: [
      {
        type: 'input',
        name: 'model',
        message: 'Model Name?:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../models/{{ camelCase model }}Model.js',
        templateFile: '../templates/model.js.txt',
      },
      {
        type: 'modify',
        path: '../models/index.js',
        pattern: /(\/\/ require models)/g,
        template: '$1\nconst {{ camelCase model }} = require(\'./{{ camelCase model}}Model\');',
      },
      {
        type: 'modify',
        path: '../models/index.js',
        pattern: /(\/\/ export models)/g,
        template: '$1\n  {{ camelCase model }},',
      },
    ],
  });
};
