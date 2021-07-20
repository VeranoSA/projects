const chalk = require('chalk'); // for coloring output
const figlet = require('figlet'); // for display Banner

const greet =  require('./greet');

const styledMessage = chalk.bgGreen.black(figlet.textSync(greet('Tebogo'),{ horizontalLayout: 'full' }));

console.log('chalk combined with figlet : ' + styledMessage);