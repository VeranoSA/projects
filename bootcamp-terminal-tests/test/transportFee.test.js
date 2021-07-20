let assert = require('assert');
let transportFee = require('../transportFee')

describe('The transportFee function', function(){

    it("should return R20 for morning shifts", function(){
        assert.equal('R20', transportFee('morning'));
    });
    it("should pay nothing when working nightshifts", function(){
        assert.equal('free', transportFee('nightshift'));
    });
    it("should return R10 for afternoonshifts", function(){
        assert.equal('R10', transportFee('afternoon'));
    });
});
