'use strict';

const path = require('path');

module.exports = {
  description: 'Add action and reducer',
  prompts: [
  {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    validate: (value) => {
      if ((/.+/).test(value)) { return true; }
      return 'name is required';
    }
  },
  {
    type: 'confirm',
    name: 'wantReducer',
    default: true,
    message: 'Do you want to add a reducer?'
  }],
  actions: (data) => {
    let actions = [];
    const actionTemplate = path.resolve(__dirname, 'action.js.hbs');

    actions.push({
      type: 'add',
      path: path.resolve(process.cwd(), 'app/actions/{{camelCase name}}Actions.js'),
      templateFile: actionTemplate,
      abortOnFail: true,
    });

    if (data.wantReducer) {
      const reducerTemplate = path.resolve(__dirname, 'reducer.js.hbs');

      actions.push({
        type: 'add',
        path: path.resolve(process.cwd(), 'app/reducers/{{camelCase name}}Reducer.js'),
        templateFile: reducerTemplate,
        abortOnFail: true,
      });
    }

    return actions;
  },
};
