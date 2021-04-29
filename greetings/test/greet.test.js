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

    it('Should increment counter for each different name greeted', function () {
        let greetFunc = greetFactory();
        greetFunc.greetNow('Tebogo','English');
        greetFunc.greetNow('Ncebakazi','Zulu');
        greetFunc.greetNow('Unalo','Xhosa');
       
        assert.equal(3,greetFunc.getCounter());
    });
  
    it('Should not increment counter if the name has been greeted even if you greet in different language', function () {
        let greetFunc = greetFactory();
        greetFunc.greetNow('Tebogo','English');
        greetFunc.greetNow('Tebogo','Zulu');
        greetFunc.greetNow('Tebogo','Xhosa');
        greetFunc.greetNow('Unalo','English');
        greetFunc.greetNow('Unalo','Zulu');
        greetFunc.greetNow('Unalo','Xhosa');
        greetFunc.greetNow('Mbuyi','English');
        greetFunc.greetNow('Mbuyi','Zulu');
        greetFunc.greetNow('Mbuyi','Xhosa');
        greetFunc.greetNow('Pholisa','English');
        greetFunc.greetNow('Pholisa','Zulu');
        greetFunc.greetNow('Pholisa','Xhosa');
       
        assert.equal(4,greetFunc.getCounter());
    });

    });