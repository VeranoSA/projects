const chalk = require('chalk');
const figlet = require('figlet');

const greet =  require('./greet');

const styledMessage = chalk.bgRed.black(greet('Tebogo'));
const figletMessage = figlet.textSync('Hello Tebogo');

console.log('chalk message : ' + styledMessage);
console.log('==============');
console.log('figlet message : '+ figletMessage);