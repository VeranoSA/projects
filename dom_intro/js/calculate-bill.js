//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
alert(calculateBtnElement);
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");



//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked);
