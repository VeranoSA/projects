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

var textInst = textBillTotalFunc();

function textBillTotal(){
//get the value entered in the billType textfeild
var bill = billTypeTextElement.value.trim();
textInst.billCalculation(bill);

//update the totals that is displayed on the screen.
callTotalOneElement.innerHTML = textInst.getCallTotal().toFixed(2);
smsTotalOneElement.innerHTML = textInst.getSmsTotal().toFixed(2);
totalOneElement.innerHTML = textInst.getTotalCost().toFixed(2);

//color the total based on the criteria
totalOneElement.classList.remove("warning");
totalOneElement.classList.remove("danger");
totalOneElement.classList.add(textInst.totalClassName());

}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);

