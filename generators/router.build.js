const { inputRequired } = require('./helpers');

module.exports = (plop) => {
  plop.setGenerator('Simple Router builder', {
    prompts: [
      {
        type: 'input',
        name: 'model',
        message: 'Model Name?:',
        validate: inputRequired('model'),
      },
      {
        type: 'confirm',
        name: 'withController',
        message: 'is a standard route or has a controller already created?',
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [
      ];
      if (data.fullController) {
        actions.push();
      }
      return actions;
    },
    actionss: [
      {
        type: 'add',
        path: '@/models/{{ camelCase model }}Model.js',
        templateFile: '@/templates/model.js.txt',
      },
      {
        type: 'modify',
        path: '@/models/index.js',
        pattern: /(\/\/ require models)/g,
        template: '$1\nconst {{ camelCase model }} = require(\'./{{ camelCase model}}Model\');',
      },
      {
        type: 'modify',
        path: '@/models/index.js',
        pattern: /(\/\/ export models)/g,
        template: '$1\n  {{ camelCase model }},',
      },
    ],
  });
};
