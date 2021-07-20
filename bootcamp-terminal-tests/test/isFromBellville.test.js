let assert = require('assert');
let isFromBellville = require('../isFromBellville')

describe('The isFromBellville function', function(){

    it("should return false if the number plates doesn't starts with CY", function(){
      assert.equal(false, isFromBellville('hjgxhcfshfdhsf'));
    });
    it("should return false if you pass an empty string", function(){
        assert.equal(false, isFromBellville(''));
    });
    it("should return true if the number plate starts with CY", function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
});
