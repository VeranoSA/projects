const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgBlueBright.black(greet('Xola'));
console.log(styledMessage)
