function radioBillTotal(){

    var callsTotal = 0;
    var smsTotal = 0;
    
    function billCalculation(bill){
    
       var billString = bill.trim();
    
        if (billString === "call"){
            callsTotal += 2.75;
        }
        else if (billString === "sms"){
            smsTotal += 0.75;
        }
    }
    
    
    function getCallTotal(){
        return callsTotal;
    }
    function getSmsTotal(){
        return smsTotal;
    }
    function getTotalCost(){
        return callsTotal + smsTotal;
    }
    function totalClassName(){
        if(getTotalCost() >= 30 && getTotalCost() <= 50){
            return 'warning';
        }
        if (getTotalCost() >= 50){
            return 'danger';
        }
    }
        return {
            getCallTotal,
            getSmsTotal,
            getTotalCost,
            billCalculation,
            totalClassName
    }
    }
