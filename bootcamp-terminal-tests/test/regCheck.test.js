let assert = require('assert');
let regCheck = require('../regCheck')

describe('The regCheck function', function(){

    it("should return false if the number plate is an empty string ", function(){
        assert.equal(false, regCheck(''));
    });
    it("should return true if the number plate doesnt ends with same location", function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'MP'));
    });
    it("should return true if the number plate ends with same location", function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
});
