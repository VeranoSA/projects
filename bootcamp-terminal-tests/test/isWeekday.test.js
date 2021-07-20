let assert = require('assert');
let isWeekday = require('../isWeekday')

describe('The isWeekday function', function(){

    it("should return false if its not weekend", function(){
        assert.equal(false, isWeekday('Saturday'));
    });
    it("should return true if its weekday", function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it("should return false if its empty string", function(){
        assert.equal(false, isWeekday(''));
    });
});
