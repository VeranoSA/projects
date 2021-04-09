// get a reference to the sms or call radio buttons
var billItemTypeRadioElemThree = document.querySelector ('.billItemTypeRadio');

// get refences to all the settings fields
var callCostSetElemThree = document.querySelector('.callCostSetting');
var smsCostSettingElemThree = document.querySelector('.smsCostSetting');
var warningLevelSettingElemThree = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElemThree = document.querySelector('.criticalLevelSetting');

//get refences to all the bill type fields
var callCostTotaElemThree = document.querySelector('.callTotalThree');
var smsCostTotalElemThree = document.querySelector('.smsTotalThree');
var totalCostsElemThree = document.querySelector('.totalCostThree');

//get a reference to the add button
var radioBillAddBtnElemThree = document.querySelector ('.billAddBtn');

//get a reference to the 'Update settings' button
var updateSetBtn = document.querySelector ('.updateSettings')

// create a variable that will keep track of all total bill
var callsThree = 0;
var smsThree = 0;
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.


function radioBtnClickedThree(){

    var checkedRadioBillBtnThree = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBillBtnThree){
        var billItemTypeThree = checkedRadioBillBtnThree.value;
        // billItemType will be 'call' or 'sms'
    if (billItemTypeThree === 'sms'){
        smsThree += 0.75;
    }
    if (billItemTypeThree === 'call') {
        callsThree += 2.75;
    }
    //update the totals that is displayed on the screen.
    callCostTotaElemThree.innerHTML = callsThree.toFixed(2);
    smsCostTotalElemThree.innerHTML = smsThree.toFixed(2);
    var totalCostBillThree = callsThree + smsThree;
    totalCostsElemThree.innerHTML = totalCostBillThree.toFixed(2);
  }
}
//add an event listener for when the add button is pressed
radioBillAddBtnElemThree.addEventListener('click', radioBtnClickedThree);

//add an event listener for when the 'Update settings' button is pressed



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
