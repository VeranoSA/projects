describe('The greet function', function(){

    it('should greet Vasco correctly', function(){
        assert.equal('Hello, Vasco', greet('Vasco'));
    });
    it('should greet Tebogo correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Tebogo', greet('Tebogo'));
    });
});
