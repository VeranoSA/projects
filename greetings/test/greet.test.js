describe('The Greet with factory function' , function(){

    it('should greet username in English', function(){
        let greetFunc = greetFactory({});
        assert.equal('Hello Cara!!!', greetFunc.greetNow("Cara", "English"));
        
    });
    it('should greet username in Zulu', function(){
        let greetFunc = greetFactory({});
        assert.equal('Sawubona Cara!!!', greetFunc.greetNow("Cara", "Zulu"));
        
    });
    it('should greet username in Tsonga', function(){
        let greetFunc = greetFactory({});
        assert.equal('Avuxeni Cara!!!', greetFunc.greetNow("Cara", "Tsonga"));
        
    });
    it('should return name with UpperCase first Letter and the rest should be small Letters', function(){
        let greetFunc = greetFactory({});
        assert.equal('Hello Ncebakazi!!!', greetFunc.greetNow("nceBaKazi", "English"));
        
    });
    it('Should not increase the counter if the name has been greeted', function () {
        let greetFunc = greetFactory({});
        greetFunc.greetNow('Tebogo','English');
        var countGreet1 = JSON.parse(localStorage.getItem('count'));
        greetFunc.greetNow('Tebogo','Zulu');
        var countGreet2 = JSON.parse(localStorage.getItem('count'));
        
        
        
        assert.equal(countGreet1,countGreet2);
    });

    });