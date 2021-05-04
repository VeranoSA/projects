describe('Registration_Numbers with factory function' , function(){
    describe('Should display only registration numbers from CAPE TOWN,PAARL,BELVILLE,STELLENBOSCH' , function(){
    it('should be able to return registration numbers from Cape Town', function(){
        let regFunc = regFactory({});
        assert.equal('CA 123123', regFunc.regNumber("CA", "123123"));
        
    });
    it('should be able to return registration number from Paarl', function(){
        let regFunc = regFactory({});
        assert.equal('CJ 123123', regFunc.regNumber("CJ", "123123"));
        
    });
    it('should be able to return registration number from Bellville', function(){
        let regFunc = regFactory({});
        assert.equal('CL 123123', regFunc.regNumber("CL", "123123"));
        
    });
    it('should be able to return registration number from Stellenboch', function(){
        let regFunc = regFactory({});
        assert.equal('CY 123123', regFunc.regNumber("CY", "123123"));
        
    });
    describe('Registration format should only be eg. CA 123-123 or CA 123 123 or CA 123123' , function(){
        it('should be able to return registration number with "-" special case', function(){
        let regFunc = regFactory({});
        assert.equal('CY 123-123', regFunc.regNumber("CY", "123-123"));

    });
    it('should be able to return registration number with "whiteSpace between 2 equal numbers" special case', function(){
        let regFunc = regFactory({});
        assert.equal('CA 123 123', regFunc.regNumber("CA", "123 123"));

    });
    it('should be able to return registration number with no special case & whiteSpace between numbers', function(){
        let regFunc = regFactory({});
        assert.equal('CA 123 123', regFunc.regNumber("CA", "123 123"));

    });
    it('should be able to return registration number to Capital letters if entered with small letters ', function(){
        let regFunc = regFactory({});
        assert.equal('CA 123 123', regFunc.regNumber("ca", "123 123"));

    });
    
});
});
});

