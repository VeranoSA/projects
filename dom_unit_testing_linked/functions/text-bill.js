function textBillTotal(){

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
//update the totals that is displayed on the screen.
//callTotalOneElement.innerHTML = callsTotal.toFixed(2);
//smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
//var totalCost = callsTotal + smsTotal;
//totalOneElement.innerHTML = totalCost.toFixed(2);

//color the total based on the criteria
//if (totalCost >= 50){
    //totalOneElement.classList.add('danger');
//}
//if (totalCost >= 30) {
    //totalOneElement.classList.add('warning');
//}
//}
//add an event listener for when the add button is pressed
//textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
