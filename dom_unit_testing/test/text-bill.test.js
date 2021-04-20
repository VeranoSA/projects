describe('Text-Bill', function(){

    it('should return 2 calls', function(){
        let textBill = textBillTotal();
            textBill.billCalculation("call");
            textBill.billCalculation("call");
        
        assert.equal(5.50, textBill.getCallTotal());
        assert.equal(5.50, textBill.getTotalCost());
    });
    it('should return 2 sms', function(){
        let textBill = textBillTotal();
            textBill.billCalculation("sms");
            textBill.billCalculation("sms");
        
        assert.equal(1.50, textBill.getSmsTotal());
        assert.equal(1.50, textBill.getTotalCost());
    });
    it('should return total cost for 2 sms and 2 calls', function(){
        let textBill = textBillTotal();
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("sms");
            textBill.billCalculation("sms");
        
        assert.equal(1.50, textBill.getSmsTotal());
        assert.equal(5.50, textBill.getCallTotal());
        assert.equal(7.00, textBill.getTotalCost());
    });
    it('should return class name "warning" if Total cost exceeds 30', function(){
        let textBill = textBillTotal();
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            
            
        
        assert.equal('warning', textBill.totalClassName());
    
    });
    it('should return class name "danger" if Total cost exceeds 50', function(){
        let textBill = textBillTotal();
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            textBill.billCalculation("call");
            
            
        
        assert.equal('danger', textBill.totalClassName());
    
    });
});
