let assert = require('assert');
let countAllFromTown = require('../countAllFromTown')

describe('The countAllFromTown function', function(){

    it("should return 3 if theres Three registration plate from same town", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it("should return 0 if theres no registration plate from an area", function(){
        assert.equal(0, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','GP'));
    });
    it("should return 0 if an empty string is passed", function(){
        assert.equal(0, countAllFromTown(''));
    });
});
