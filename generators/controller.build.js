module.exports = (plop) => {
  plop.setGenerator('Create Controller', {
    description: 'Create new Controller',
    prompts: [
      {
        type: 'input',
        name: 'controller',
        message: 'Name the Controller:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '',
      },
    ],
  });
};
