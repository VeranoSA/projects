let assert = require('assert');
let greet = require('../greet')

describe('The greet function', function(){

    it('should greet Vasco correctly', function(){
        assert.equal('Hello, Vasco', greet('Vasco'));
    });
    it('should greet Tebogo correctly', function(){
        assert.equal('Hello, Tebogo', greet('Tebogo'));
    });
});
