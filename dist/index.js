const componentGenerator = require('./component/index.js');
const otherGenerator = require('./other/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('other', otherGenerator);
};
