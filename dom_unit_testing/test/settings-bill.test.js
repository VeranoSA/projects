describe('The bill with setting factory function', function(){

    it('should be able to set the call cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.getCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());
    });
});
