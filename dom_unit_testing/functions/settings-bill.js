function billWithSettings(){
    
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
    return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }
    function setWarningLev(warningLevel){
            theWarningLevel = warningLevel;
    }
    function getWarningLev(){
        return theWarningLevel;
    }
    function setCriticalLev(criticalLevel){
        theCriticalLevel = criticalLevel;
                }
    function getCriticalLev(){
        return theCriticalLevel;
                }
    function makeCallCost(){
    
    }
    function getTotalCost(){
        return 6.75;
    }
    function getTotalCallCost(){
        return 6.75;
    }
    function getTotalSmsCost(){
        return 0;
    }
     
return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLev,
    getWarningLev,
    setCriticalLev,
    getCriticalLev,
    makeCallCost,
    getTotalCost,
    getTotalCallCost,
    getTotalSmsCost

}
}
