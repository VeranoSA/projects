let assert = require('assert');
let countAllPaarl = require('../countAllPaarl')

describe('The countAllPaarl function', function(){

    it("should return 3 if theres Three registration plate ending with CJ", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it("should return 0 if theres no registration plate ending with CJ", function(){
        assert.equal(0, countAllPaarl('CL 345 123, L 2345, CL 123-546, CK 345, CK 123'));
    });
    it("should return 0 if you pass an empty string", function(){
        assert.equal(0, countAllPaarl(''));
    });

});
