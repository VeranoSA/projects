describe('Registration_Numbers with factory function' , function(){
    describe('Should display only registration numbers from CAPE TOWN,PAARL,BELVILLE,STELLENBOSCH' , function(){
    it('should be able to return registration numbers from Cape Town', function(){
        let regFunc = regFactory({});
        assert.equal(true, regFunc.regNumber('CA 123 123'));
        
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
    it('should be able to return registration number with whiteSpace between 2 equal numbers', function(){
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
        assert.equal('CY 123 123', regFunc.regNumber("cy", "123 123"));
        assert.equal('CL 123 123', regFunc.regNumber("cl", "123 123"));
        assert.equal('CJ 123 123', regFunc.regNumber("cj", "123 123"));


    });
    describe('Registration number incrementation' , function(){
        it('Should be able to add new registration each time when its enterd', function(){
        let regFunc = regFactory({});
        regFunc.regNumber("CA", "123-123");
        regFunc.regNumber("CY", "125-123");
        regFunc.regNumber("CL", "167-129");
        regFunc.regNumber("CJ", "346-543");
        assert.equal(4, regFunc.getCounter());
    
});
        it('Should not be able to enter new registration if it was enterd', function(){
        let regFunc = regFactory({});
        regFunc.regNumber("CA", "555 555");
        regFunc.regNumber("CA", "555 555");
        regFunc.regNumber("CL", "333 333");
        regFunc.regNumber("CL", "333 333");
        assert.equal(2, regFunc.getCounter());

});
});
});
});
});

