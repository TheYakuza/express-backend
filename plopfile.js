module.exports = (plop) => {
  plop.setGenerator('test', {
    description: 'Create a new Test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name the test:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'test/{{ camelCase name }}.test.js',
        templateFile: 'templates/test.js',
      },
    ],
  });
  plop.setGenerator('model', {
    description: 'Create a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'models/{{ camelCase name }}Model.js',
        templateFile: 'templates/model.js',
      },
      {
        type: 'modify',
        path: 'models/{{ camelCase name }}Model.js',
        pattern: /(parse)/g,
        template: '{{ camelCase name}}',
      },
      {
        type: 'modify',
        path: 'models/index.js',
        pattern: /(\/\/ require models)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}Model\');',
      },
      {
        type: 'modify',
        path: 'models/index.js',
        pattern: /(\/\/ export models)/g,
        template: '$1\n  {{ camelCase name }},',
      },
    ],
  });
  plop.setGenerator('route', {
    description: 'Create New Route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your new route name?',
      },
      {
        type: 'confirm',
        name: 'withController',
        message: 'is a standard route or has a controller already created?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'routes/{{ camelCase name }}.js',
        templateFile: 'templates/routes.js',
      },
      {
        type: 'modify',
        path: 'routes/{{ camelCase name }}.js',
        pattern: /(template)/g,
        template: '{{ camelCase name}}',
      },
      {
        type: 'modify',
        path: 'routes/index.js',
        pattern: /(\/\/ routes list)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}\');',
      },
      {
        type: 'modify',
        path: 'routes/index.js',
        pattern: /(\/\/ export routes)/g,
        template: '$1\nrouter.use(\'/{{ camelCase name }}\', {{ camelCase name }});',
      },
    ],
  });
  plop.setGenerator('controller', {
    description: 'Create New Controller',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Whats is your controller name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'controllers/{{ camelCase name }}.js',
        templateFile: 'templates/controllers.js',
      },
      {
        type: 'modify',
        path: 'controllers/index.js',
        pattern: /(\/\/ controller list)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}\');',
      },
      {
        type: 'modify',
        path: 'controllers/index.js',
        pattern: /(\/\/ export controllers)/g,
        template: '$1\n  {{ camelCase name }},',
      },
    ],
  });
  plop.setGenerator('util', {
    description: 'Create new util',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'new Util name?',
    }],
    actions: [
      {
        type: 'add',
        path: 'utils/{{ camelCase name }}.js',
        templateFile: 'templates/utils.js',
      },
      {
        type: 'modify',
        path: 'utils/index.js',
        pattern: /(\/\/ util list)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}\');',
      },
      {
        type: 'modify',
        path: 'utils/index.js',
        pattern: /(\/\/ export utils)/g,
        template: '$1\n  {{ camelCase name }},',
      },
    ],
  });
};
