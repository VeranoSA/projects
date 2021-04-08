// get a reference to the sms or call radio buttons
var billItemTypeRadioElem = document.querySelector ('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector ('.radioBillAddBtn');
// get a reference to call total should be displayed
var callTotalTwoElem = document.querySelector ('.callTotalTwo');
// get a reference to sms total should be displayed
var smsTotalTwoElem = document.querySelector ('.smsTotalTwo');
//get a reference to total should be displayed
var totalTwoElem = document.querySelector ('.totalTwo');

//create a variable that will keep track of the total bill
var calls = 0;
var sms = 0;

function radioBtnClicked(){

var checkedRadioBillBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBillBtn){
    var billItemType = checkedRadioBillBtn.value;
    // billItemType will be 'call' or 'sms'
if (billItemType === 'sms'){
    sms += 0.75;
}
if (billItemType === 'call') {
    calls += 2.75;
}
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = calls.toFixed(2);
    smsTotalTwoElem.innerHTML = sms.toFixed(2);
    var totalCost = calls + sms;
    totalTwoElem.innerHTML = totalCost.toFixed(2);
 }
}
//add an event listener for when the add button is pressed
radioBillAddBtnElem.addEventListener('click', radioBtnClicked);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on screen.
