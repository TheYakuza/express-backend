module.exports = (plop) => {
  plop.setGenerator('Full Component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name your component',
      },
    ],
    actions: [
      // load templates
      {
        type: 'add',
        path: '../models/{{camelCase name}}Model.js',
        templateFile: '../templates/model.js.txt',
      },
      {
        type: 'add',
        path: '../controllers/{{camelCase name}}Controller.js',
        templateFile: '../templates/controller.js.txt',
      },
      {
        type: 'add',
        path: '../routes/{{camelCase name}}.js',
        templateFile: '../templates/router.js.txt',
      },
      {
        type: 'add',
        path: '../test/integration/{{camelCase name}}.test.js',
        templateFile: '../templates/test.js.txt',
      },
      // add to index file
      {
        type: 'modify',
        path: '../models/index.js',
        pattern: /(\/\/ require models)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}Model\');',
      },
      {
        type: 'modify',
        path: '../controllers/index.js',
        pattern: /(\/\/ require controllers)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}Controller\');',
      },
      {
        type: 'modify',
        path: '../routes/index.js',
        pattern: /(\/\/ require routes)/g,
        template: '$1\nconst {{ camelCase name }} = require(\'./{{ camelCase name}}\');',
      },
      // import functions
      {
        type: 'modify',
        path: '../models/index.js',
        pattern: /(\/\/ export models)/g,
        template: '$1\n  {{ camelCase name }},',
      },
      {
        type: 'modify',
        path: '../controllers/index.js',
        pattern: /(\/\/ export controllers)/g,
        template: '$1\n  {{ camelCase name }},',
      },
      {
        type: 'modify',
        path: '../routes/index.js',
        pattern: /(\/\/ export routes)/g,
        template: '$1\nrouter.use(\'/{{ camelCase name }}\', {{ camelCase name }});',
      },
    ],
  });
};
