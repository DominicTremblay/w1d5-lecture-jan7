var chalk = require('chalk');

module.exports = function(prefix) {
  logRed = function(str) {
    console.log(chalk.red(prefix + str));
  };

  logBlue = function(str) {
    console.log(chalk.blue(prefix + str));
  };

  return {
    logRed: logRed,
    logBlue: logBlue,
  };
};
