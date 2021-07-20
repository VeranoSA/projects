let assert = require('assert');
let countRegNumber = require('../countRegNumber')

describe('The countRegNumber function', function(){

    it("should return 1 if theres only one registration plate", function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
    it("should return 3 if theres three registration plates", function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it("should return 1 if theres an empty string", function(){
        assert.equal(1, countRegNumber(''));
    });
});
