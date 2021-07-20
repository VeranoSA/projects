let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill')

describe('The totalPhoneBill function', function(){

    it("should return R7.45 for call = R2.75 * 2 + sms = R0.65 * 3", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should return R0.65 for one sms only", function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });
    it("should return R2.75 for one call only", function(){
        assert.equal('R2.75', totalPhoneBill('call'));
    });

});
