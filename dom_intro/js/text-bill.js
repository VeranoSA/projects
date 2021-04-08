// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector ('.billTypeText');
//get a reference to the add button
var textTotalAddBtn = document.querySelector ('.addToBillBtn');
//get a reference to where the call total should be displayed
var callTotalOneElement = document.querySelector ('.callTotalOne');
//get a reference to where the sms total should be displayed
var smsTotalOneElement = document.querySelector ('.smsTotalOne');
//get a reference to where overall total should be displayed
var totalOneElement = document.querySelector ('.totalOne');

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
//get the value entered in the billType textfeild
var billTypeEntered = billTypeTextElement.value.trim();

if (billTypeEntered === "call"){
    callsTotal += 2.75
}
else if (billTypeEntered === "sms"){
    smsTotal += 0.75;
}
//update the totals that is displayed on the screen.
callTotalOneElement.innerHTML = callsTotal.toFixed(2);
smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
totalOneElement.innerHTML = totalCost.toFixed(2);

//color the total based on the criteria
if (totalCost >= 50){
    totalOneElement.classList.add('danger');
}
if (totalCost >= 30) {
    totalOneElement.classList.add('warning');
}
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
