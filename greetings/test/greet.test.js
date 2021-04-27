describe('The Greet with factory function' , function(){

    it('should greet username in English', function(){
        let greetFunc = greet();
        assert.equal('Hello Cara!!!', greetFunc.greetNow("Cara", "English"));
        
    });
    it('should greet username in Zulu', function(){
        let greetFunc = greet();
        assert.equal('Sawubona Cara!!!', greetFunc.greetNow("Cara", "Zulu"));
        
    });
    it('should greet username in Tsonga', function(){
        let greetFunc = greet();
        assert.equal('Avuxeni Cara!!!', greetFunc.greetNow("Cara", "Tsonga"));
        
    });
    it('should return name with UpperCase first Letter and the rest should be small Letters', function(){
        let greetFunc = greet();
        assert.equal('Hello Ncebakazi!!!', greetFunc.greetNow("nceBaKazi", "English"));
        
    });

    });