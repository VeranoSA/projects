//========================= DOM && STORAGE ITEMS ======================
//Methods used:
//localStorage.getItem - Get the value of the specified local storage item
//localStorage.setItem - Set the value of the specified local storage item
//JSON.parse() - When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//JSON.stringify() - When sending data to a web server, the data has to be a string.
//Convert a JavaScript object into a string


//adding querySelectors and refs

var displayName = document.querySelector('#displayName');
var welcomeText = document.querySelector('#p1')

var getInput = document.querySelector('#inputBox');

//var addBtn = document.querySelector('#addBtn');
var resetBtn = document.querySelector('#resetBtn');

var displayCount = document.querySelector('#countNumber');

//Holds local storage
var localLogic = {}

//We are retriving infomation from the local storage
if (localStorage['regMap']) {
       localLogic = localStorage['regMap'];
}
//an instance of the reg Factory
var reg = regFactory();
//Setting the local storage to the logic function
reg.setlocal(localLogic)

//get the registration from the textbox 
var getName = function () {
    var name = getInput.value;

    return {
        name
    }
}

//function to clear the textbox 
var clearBox = function () {
    getInput.value = "";
}

//display the total counts of regings counting the keys
var setCounter = function () {

    displayCount.innerHTML = Object.keys(reg.getlocal());
}
setCounter();

var submitForm =function(){

    //var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
    //console.log('type of name from DOM : '+typeof(parseFloat(nameFromDom)));
    
    console.log(nameFromDom)
    //ensure theres no empty name and there is a checked radio button
    if (nameFromDom){

            displayName.innerHTML = reg.regNumber(nameFromDom);
            console.log(reg.getlocal());

            localStorage.setItem('regMap', JSON.stringify(reg.getlocal()));
            setCounter();
            clearBox();
    
    } else {
        displayName.innerHTML = 'Please Type In Registration To Proceed';

    }
        return false;
}


// close the div in 5 secs
window.setTimeout("closeDiv();", 15000);
function closeDiv()
{
    var Temp = document.getElementById("p1")
    if (Temp != null)
        Temp.style.display = "none";
}
    // ======================EVENTS==============================

//Event listener for the reset button

resetBtn.addEventListener('click', function() {
    localStorage.clear()
    location.reload()
});
