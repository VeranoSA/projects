// get a reference to the sms or call radio buttons
//var billItemTypeRadioElem = document.querySelector ('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector ('.radioBillAddBtn');
// get a reference to call total should be displayed
var callTotalTwoElem = document.querySelector ('.callTotalTwo');
// get a reference to sms total should be displayed
var smsTotalTwoElem = document.querySelector ('.smsTotalTwo');
//get a reference to total should be displayed
var totalTwoElem = document.querySelector ('.totalTwo');

//create a variable that will keep track of the total bill
//var calls = 0;
//var sms = 0;
var radioInst = radioBillTotal();

function radioBtnClicked(){

var checkedRadioBillBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBillBtn){
    var billItemType = checkedRadioBillBtn.value;
    radioInst.billCalculation(billItemType);

    // billItemType will be 'call' or 'sms'

    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = radioInst.getCallTotal().toFixed(2);
    smsTotalTwoElem.innerHTML = radioInst.getSmsTotal().toFixed(2);

    totalTwoElem.innerHTML = radioInst.getTotalCost().toFixed(2);

    totalTwoElem.classList.remove("warning");
    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.add(radioInst.totalClassName());
    //color the total based
//if (totalCost >= 50){
    //totalTwoElem.classList.add('danger');
 //}
//if (totalCost >= 30){
    //totalTwoElem.classList.add('warning');
//}
}
}
//add an event listener for when the add button is pressed
radioBillAddBtnElem.addEventListener('click', radioBtnClicked);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on screen.
