describe('The bill with setting factory function', function(){

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

});
