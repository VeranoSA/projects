describe('Calculate Bill', function(){

    it('should return Total cost for 1 call', function(){
        let calcuBill = calculateBill();
            calcuBill.billCalculate("call");
        
        assert.equal(2.75, calcuBill.getTotalCost());
    });
    it('should return Total cost for 1 sms', function(){
        let calcuBill = calculateBill();
            calcuBill.billCalculate("sms");
        
        assert.equal(0.75, calcuBill.getTotalCost());
    });
    it('should return Total cost for 2 calls and 3 sms', function(){
        let calcuBill = calculateBill();
            calcuBill.billCalculate("call, sms, call, sms, sms");
        
        assert.equal(7.75, calcuBill.getTotalCost());
    });
    it("should return class name 'warning' if Total cost exceeds 20", function(){
        let calcuBill = calculateBill();
            calcuBill.billCalculate("call, sms, call, sms, sms, call, sms, call, sms, sms, sms, call, sms, call, sms,");
        
        assert.equal('warning', calcuBill.totalClassName());
    });
    it("should return class name 'danger' if Total cost exceeds 30", function(){
        let calcuBill = calculateBill();
            calcuBill.billCalculate("call, call, call, sms, sms, call, sms, call, sms, sms, sms, call, call, call, sms, sms, sms, sms, call, sms, sms, sms, sms, call, sms,");
        
        assert.equal('danger', calcuBill.totalClassName());
    });
});