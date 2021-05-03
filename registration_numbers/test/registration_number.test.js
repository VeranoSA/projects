describe('Registration_Numbers with factory function' , function(){

    it('should be able to return registration number from Cape Town', function(){
        let regFunc = regFactory({});
        assert.equal('CA 234 234', regFunc.regNumber('CA 234 234'));
        
    });
    });