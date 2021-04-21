describe('Radio-Bill', function(){

    it('should return 2 calls', function(){
        let radioBill = radioBillTotal();
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
        
        assert.equal(5.50, radioBill.getCallTotal());
        assert.equal(5.50, radioBill.getTotalCost());
    });
    it('should return 2 sms', function(){
        let radioBill = radioBillTotal();
            radioBill.billCalculation("sms");
            radioBill.billCalculation("sms");
        
        assert.equal(1.50, radioBill.getSmsTotal());
        assert.equal(1.50, radioBill.getTotalCost());
    });
    it('should return total cost for 2 sms and 2 calls', function(){
        let radioBill = radioBillTotal();
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("sms");
            radioBill.billCalculation("sms");
        
        assert.equal(1.50, radioBill.getSmsTotal());
        assert.equal(5.50, radioBill.getCallTotal());
        assert.equal(7.00, radioBill.getTotalCost());
    });
    it('should return class name "warning" if Total cost exceeds 30', function(){
        let radioBill = radioBillTotal();
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            
            
        
        assert.equal('warning', radioBill.totalClassName());
    
    });
    it('should return class name "danger" if Total cost exceeds 50', function(){
        let radioBill = radioBillTotal();
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            radioBill.billCalculation("call");
            
            
        
        assert.equal('danger', radioBill.totalClassName());
    
    });
});

