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
//var totalCostAdd = 0

// create a variables that will keep track of all the settings
//var callCostThree = 0;
//var smsCostThree = 0;
//var warningLevThree = 0;
//var criticalLevThree = 0;

// create a variables that will keep track of all three totals.
//var callTotalThree = 0;
//var smsTotalSetThree = 0;

var setInst = billWithSettings();


function settingBtn(){
    setInst.setCallCost(Number(callCostSetElemThree.value));
    setInst.setSmsCost(Number(smsCostSettingElemThree.value));
    setInst.setWarningLev(warningLevelSettingElemThree.value);
    setInst.setCriticalLev(criticalLevelSettingElemThree.value);

    addClassList()
   
}
//add an event listener for when the 'Update settings' button is pressed
updateSetBtn.addEventListener('click', settingBtn);

function radioBtnClickedThree(){

    var checkedRadioBillBtnThree = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        var bill = checkedRadioBillBtnThree.value;
        setInst.billSwitch(bill);

        // billItemType will be 'call' or 'sms'
    
    //update the totals that is displayed on the screen.
    callCostTotaElemThree.innerHTML = setInst.getTotalCallCost().toFixed(2);
    smsCostTotalElemThree.innerHTML = setInst.getTotalSmsCost().toFixed(2);
    totalCostsElemThree.innerHTML = setInst.getTotalCost().toFixed(2);

    addClassList()
  }



function addClassList(){
    totalCostsElemThree.classList.remove("warning");
    totalCostsElemThree.classList.remove("danger");
    totalCostsElemThree.classList.add(setInst.totalClassName());
}
//add an event listener for when the add button is pressed
radioBillAddBtnElemThree.addEventListener('click', radioBtnClickedThree);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
