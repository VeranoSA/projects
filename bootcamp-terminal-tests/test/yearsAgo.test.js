let assert = require('assert');
let yearsAgo = require('../yearsAgo')

describe('The yearsAgo function', function(){

    it("should return 1 if the year from current year is 2020", function(){
        assert.equal(1, yearsAgo('2020'));
    });
    it("should return the current year 2021(current year) if you pass an empty string ", function(){
        assert.equal(2021, yearsAgo(''));
    });
});
