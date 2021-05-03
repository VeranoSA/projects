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

//var greetBtn = document.querySelector('#greetBtn');
var resetBtn = document.querySelector('#resetBtn');

var displayCount = document.querySelector('#countNumber');

//Holds local storage
var localLogic = {}

//We are retriving infomation from the local storage
if (localStorage['userMap']) {
       localLogic = JSON.parse(localStorage['userMap']);
}
//an instance of the greet Factory
var greet = greetFactory();
//Setting the local storage to the logic function
greet.setlocal(localLogic)

//get the name of the user from the textbox 
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

//display the total counts of greetings counting the keys
var setCounter = function () {

    displayCount.innerHTML = Object.keys(greet.getlocal()).length;
}
setCounter();

var submitForm =function(){

    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
    //console.log('type of name from DOM : '+typeof(parseFloat(nameFromDom)));
    
    console.log(nameFromDom)
    //ensure theres no empty name and there is a checked radio button
    if (nameFromDom){
        if (radioBtn !== null) {
            // cons÷ole.log(Object.keys(localLogic).length)
            //getName();
            var langFromDom = greet.setLang(radioBtn.value);
            // checkCounter();
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
            console.log('greet.getlocal()')

            localStorage.setItem('userMap', JSON.stringify(greet.getlocal()));
            setCounter();
            clearBox();
        } else {
            displayName.innerHTML = ('Please Choose Your Language First');
        }
    } else {
        displayName.innerHTML = 'Please Type In Name To Proceed';

    }
        return false;
}


// close the div in 5 secs
window.setTimeout("closeDiv();", 10000);
function closeDiv()
{
    var Temp = document.getElementById("p1")
    if (Temp != null)
        Temp.style.display = "none";
}
    // ======================EVENTS==============================

//Event listener for the reset button

resetBtn.addEventListener('click', function run() {
    localStorage.clear()
    location.reload()
});
