'use strict';

const path = require('path');

module.exports = {
  description: 'Add component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      return Boolean(value) ? true : 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = path.resolve(__dirname, 'stateless.js.hbs');
        break;
      }
      default: {
        componentTemplate = path.resolve(__dirname, 'stateless.js.hbs');
      }
    }

    const actions = [{
      type: 'add',
      path: path.resolve(process.cwd(), 'app/components/{{properCase name}}.js'),
      templateFile: componentTemplate,
      abortOnFail: true,
    }];

    return actions;
  },
};
