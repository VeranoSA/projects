describe('The bill with setting factory function' , function(){

    it('should be able to set the call cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });
    it('should be able to set the sms cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    });
    it('should be able to set the sms and call cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.85);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(1.85, settingsBill.getCallCost());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(0.75);
        settingsBill2.setCallCost(2.75);

        assert.equal(0.75, settingsBill2.getSmsCost());
        assert.equal(2.75, settingsBill2.getCallCost());
    });
    it('should be able to set the warning level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLev(25);

        assert.equal(25, settingsBill.getWarningLev());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setWarningLev(35);

        assert.equal(35, settingsBill2.getWarningLev());
    });
    it('should be able to set the critical level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLev(55);

        assert.equal(55, settingsBill.getCriticalLev());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setCriticalLev(80);

        assert.equal(80, settingsBill2.getCriticalLev());
    });
    it('should be able to set the warning & critical level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLev(32);
        settingsBill.setCriticalLev(62);

        assert.equal(32, settingsBill.getWarningLev());
        assert.equal(62, settingsBill.getCriticalLev());

    });
});

describe('use the values', function(){

    it('should be able to use the call cost set', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
        
    });
});
