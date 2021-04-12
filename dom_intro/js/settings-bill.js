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
var updateSetBtn = document.querySelector ('.updateSettings');

// create a variable that will keep track of all total bill
var totalCostAdd = 0

// create a variables that will keep track of all the settings
var callCostThree = 0;
var smsCostThree = 0;
var warningLevThree = 0;
var criticalLevThree = 0;

// create a variables that will keep track of all three totals.
var callTotalThree = 0;
var smsTotalSetThree = 0;


function settingBtn(){
    callCostThree = Number(callCostSetElemThree.value);
    smsCostThree = Number(smsCostSettingElemThree.value);
    warningLevThree = warningLevelSettingElemThree.value;
    criticalLevThree = criticalLevelSettingElemThree.value;

    addClassList()
// if (radioBillAddBtnElemThree.disabled){
//     radioBillAddBtnElemThree.disabled = false;
// }   
}
//add an event listener for when the 'Update settings' button is pressed
updateSetBtn.addEventListener('click', settingBtn);

function radioBtnClickedThree(){

    var checkedRadioBillBtnThree = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBillBtnThree){
        if(totalCostAdd < criticalLevThree){
        var billItemTypeThree = checkedRadioBillBtnThree.value;
        // billItemType will be 'call' or 'sms'
    if (billItemTypeThree === 'sms'){
        smsTotalSetThree += smsCostThree;
    }
    if (billItemTypeThree === 'call') {
        callTotalThree += callCostThree;
    }
}
    //update the totals that is displayed on the screen.
    callCostTotaElemThree.innerHTML = callTotalThree.toFixed(2);
    smsCostTotalElemThree.innerHTML = smsTotalSetThree.toFixed(2);
    totalCostAdd = callTotalThree + smsTotalSetThree;
    totalCostsElemThree.innerHTML = totalCostAdd.toFixed(2);

    addClassList()
  }
}


function addClassList(){
    if(totalCostAdd > warningLevThree){
        totalCostsElemThree.classList.add ('warning');
    }
    if (totalCostAdd >= criticalLevThree){
        totalCostsElemThree.classList.add ('danger');
        // radioBillAddBtnElemThree.disabled = true;
    }
    if (totalCostAdd < criticalLevThree){
        totalCostsElemThree.classList.remove ('danger');
    }
    if (totalCostAdd < warningLevThree){
        totalCostsElemThree.classList.remove ('warning');
    }
}
//add an event listener for when the add button is pressed
radioBillAddBtnElemThree.addEventListener('click', radioBtnClickedThree);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
