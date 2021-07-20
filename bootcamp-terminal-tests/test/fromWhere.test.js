let assert = require('assert');
let fromWhere = require('../fromWhere')

describe('The fromWhere function', function(){

    it("should return Cape Town for registration plate with CA", function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it("should return Paarl for registration plate with CJ", function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it("should return Some other place! for registration plate not from CA,CJ,CY", function(){
        assert.equal('Some other place!', fromWhere('GP'));
    });
});
