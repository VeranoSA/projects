//========================= DOM && STORAGE ITEMS ======================
//Methods used:
//localStorage.getItem - Get the value of the specified local storage item
//localStorage.setItem - Set the value of the specified local storage item
//JSON.parse() - When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//JSON.stringify() - When sending data to a web server, the data has to be a string.
//Convert a JavaScript object into a string
//setTimeOut - method calls a function or evaluates an expression 
//after a specified number of milliseconds. Can only excecute once.
//setInterval - The function is only executed once. If you need to 
//repeat execution, use the setInterval() method.
//appendChild() method appends a node as the last child of a node.
//The removeChild() method removes a specified child node of the specified element.
//The getElementById() method returns the element that has the ID attribute with the specified value.
//This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate,
//or get info from, an element on your document.
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

//================================ORIGINAL DOM===================================
//adding querySelectors and refs

var displayName = document.querySelector('#displayName');

var welcomeText = document.querySelector('#p1')

var getInput = document.querySelector('#inputBox');

var showBtn = document.querySelector('#showBtn');

var showAll = document.querySelector('#showAll');

var resetBtn = document.querySelector('#resetBtn');

var displayCount = document.querySelector('#countNumber');

//Holds local storage
var localLogic = {}
//This array handles the objects being stored and used for display in the code
var regNumbers = []
//Global Constant for the regMap key, this is because is being used numerious times in the code
var regMapKey = 'regMap'
//Global constant for the number zero(0)
var ZERO = 0
//This array handles the filterd  by town objects
var townRegs = []

//We are retriving infomation from the local storage
if (localStorage[regMapKey]) {
    localLogic = localStorage[regMapKey];
}
//an instance of the reg Factory
var reg = regFactory();
//Setting the local storage to the logic function
reg.setlocal(localLogic)

//get the registration from the textbox 
var getName = function () {
    var name = getInput.value;
    name = name.toUpperCase();
    return {
        name
    }
}

//function to clear the textbox 
var clearBox = function () {
    getInput.value = "";
}

var submitForm = function () {
    var nameFromDom = getName().name;
    if (nameFromDom) {
        if (reg.regNumber(nameFromDom)) {
            displayName.innerHTML = 'Registration Was Successfuly Entered';
            //Get stored array of registration number plate objects
            regNumbers = getLocalStorageObject(regMapKey);
            //Check to see of the array has objects
            if (regNumbers === null || regNumbers.length === ZERO) {
                //Case if null then assign an empty array
                regNumbers = [];
                //Push currently being added object into the registration number array of objects
                regNumbers.push({ regNum: nameFromDom })
                //set the latest array of objects to the local storage
                setLocalStorageObject(regMapKey, regNumbers);
            } else {
                //filter the stored array of objects for the incoming registration number so there are no duplications 
                let exists = regNumbers.filter(x => x.regNum === nameFromDom)[ZERO];
                if (exists == undefined) {
                    regNumbers.push({ regNum: nameFromDom })
                    setLocalStorageObject(regMapKey, regNumbers);
                } else {
                    displayName.innerHTML = 'Number Plate Already Exists!'
                }
            }
            regNumbers = [];
        } else {
            displayName.innerHTML = 'Please Enter Correct Plate Format'
        }
        clearBox();
    } else {
        displayName.innerHTML = 'Please Type In Registration To Proceed';
    }
    displayNumberPlate();
    showRequestMessage();
    return false;
}

/**
 * This method gets displayed 3 seconds after a successful registration of a registration number
 */
function showRequestMessage() {
    setInterval(function showMeesageDiv() {
        displayName.innerHTML = 'Please Enter Registration Number';
    }, 4000);
}

/** close the div in 5 secs
window.setTimeout("closeDiv();", 20000);
function closeDiv() {
    var Temp = document.getElementById("p1")
    if (Temp != null)
        Temp.style.display = "none";
}
*/
// ======================EVENTS==============================

//Event listener for the reset button
resetBtn.addEventListener('click', function () {
    RemoveHtmlElement()
    localStorage.removeItem(regMapKey)
});

//========================Helper Functions=======================

/**
 * This function handles the retrieval of the stored array of objects
 * @param {*} key 
 * @returns 
 */
function getLocalStorageObject(key) {
    let temp = window.localStorage.getItem(key);
    return JSON.parse(temp);
}

/**
 * This function handles appends a new Object in the storage array
 * @param {*} key 
 * @param {*} value 
 */
function setLocalStorageObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function displayNumberPlate() {
    RemoveHtmlElement();
    regNumbers = getLocalStorageObject(regMapKey)
    //Add the data rows.
    //Dynamically add the number plate buttons
    if(regNumbers !== null) {
        var divElement = document.getElementById('container');
        for (var i = 0; i < regNumbers.length; i++) {
            var button = document.createElement('button');
            var divIdName = 'container' + i;
            button.setAttribute('id', divIdName)
            button.type = 'button';
            button.innerHTML = regNumbers[i].regNum;
            button.className = 'btn-styled';
            divElement.appendChild(button);
    
            // var lineBreak = document.createElement('br');
            // divElement.appendChild(lineBreak);
        }
    }
}
/**
 * This function handles the removal of all the unwanted displyaed registration number divs/buttons
 */
function RemoveHtmlElement() {
    regNumbers = getLocalStorageObject(regMapKey)
    var divId = document.getElementById('container');
    if(regNumbers !== null) {
        for (var i = 0; i < regNumbers.length; i++) {
            var childId = document.getElementById('container' + i);
            if (childId) {
                divId.removeChild(childId);
            }
        }
    }
}

/**
 * This even listener executes the display of all the registration numbers by town
*/
showBtn.addEventListener('click', function () {
    var radioBtn = document.querySelector('input[name="radioTown"]:checked');
    if (radioBtn !== null) {
        displayNumberPlateByTown(radioBtn.value);
    }
    
});


/**
 * This event listener handles the display of all the number plates persisted in the local storage
 */
showAll.addEventListener('click', function () {
    displayNumberPlate()
});


/**
 * This Method handles the functions around adding button display divs dynamically in the body of the html page, specifically for a town
 * @param {*} town 
 */
function displayNumberPlateByTown(town) {
    RemoveHtmlElement();
    regNumbers = getLocalStorageObject(regMapKey)
    //Add the data rows.
    if(regNumbers !== null) {
        for (var i = 0; i < regNumbers.length; i++) {
            var regSubstring  = regNumbers[i].regNum;
            if( regSubstring.substr(0, 2) === town) {
                townRegs.push(regNumbers[i])
            }
        }
        var divElement = document.getElementById('container');
        for (var i = 0; i < townRegs.length; i++) {
            var button = document.createElement('button');
            var divIdName = 'container' + i;
            button.setAttribute('id', divIdName)
            button.type = 'button';
            button.innerHTML = townRegs[i].regNum;
            button.className = 'btn-styled';
            divElement.appendChild(button);
    
            // var lineBreak = document.createElement('br');
            // divElement.appendChild(lineBreak);
        }
    }
    townRegs = []
}

window.onload = function(){
    displayNumberPlate()
    // displayNumberPlate2()
}


//==================================THE END=====================================
//===============================TEMPLATE DOM===================================
//==============================================================================
//==============================================================================

var displayName2 = document.querySelector('#displayName2');

var welcomeText2 = document.querySelector('#p12')

var getInput2 = document.querySelector('#inputBox2');

var showBtn2 = document.querySelector('#showBtn2');

var showAll2 = document.querySelector('#showAll2');

var resetBtn2 = document.querySelector('#resetBtn2');

var displayCount2 = document.querySelector('#countNumber2');

//Holds local storage
var localLogic2 = {}
//This array handles the objects being stored and used for display in the code
var regNumbers2 = []
//Global Constant for the regMap key, this is because is being used numerious times in the code
var regMapKey2 = 'regMap2'
//Global constant for the number zero(0)
var ZERO2 = 0
//This array handles the filterd  by town objects
var townRegs2 = []

//We are retriving infomation from the local storage
if (localStorage[regMapKey2]) {
    localLogic2 = localStorage[regMapKey2];
}
//an instance of the reg Factory
var reg2 = regFactory();
//Setting the local storage to the logic function
reg2.setlocal(localLogic2)

//get the registration from the textbox 
var getName2 = function () {
    var name = getInput2.value;
    name = name.toUpperCase();
    return {
        name
    }
}

//function to clear the textbox 
var clearBox2 = function () {
    getInput2.value = "";
}

var carRegTemplate = document.querySelector(".carRegTemplate").innerHTML;

// compile the template
var templateScript = Handlebars.compile(carRegTemplate);

regNumbers2 = getLocalStorageObject2(regMapKey2);

if (regNumbers2) {
    document.querySelector('#tempDisplay').innerHTML  = templateScript({regNums: regNumbers2});
}


var submitForm2 = function () {
    var nameFromDom2 = getName2().name;
    if (nameFromDom2) {
        if (reg2.regNumber(nameFromDom2)) {
            displayName2.innerHTML = 'Registration Was Successfuly Entered';
            //Get stored array of registration number plate objects
            regNumbers2 = getLocalStorageObject2(regMapKey2);
            //Check to see of the array has objects
            if (regNumbers2 === null || regNumbers2.length === ZERO2) {
                //Case if null then assign an empty array
                regNumbers2 = [];
                //Push currently being added object into the registration number array of objects
                regNumbers2.push({ regNum2: nameFromDom2 })
                //set the latest array of objects to the local storage
                setLocalStorageObject2(regMapKey2, regNumbers2);
            } else {
                //filter the stored array of objects for the incoming registration number so there are no duplications 
                let exists = regNumbers2.filter(x => x.regNum2 === nameFromDom2)[ZERO2];
                if (exists == undefined) {
                    regNumbers2.push({ regNum2: nameFromDom2 })
                    setLocalStorageObject2(regMapKey2, regNumbers2);
                } else {
                    displayName2.innerHTML = 'Number Plate Already Exists!'
                }
            }
            regNumbers2 = [];
        } else {
            displayName2.innerHTML = 'Please Enter Correct Plate Format'
        }
        clearBox2();
    } else {
        displayName2.innerHTML = 'Please Type In Registration To Proceed';
    }
     
    showRequestMessage2();
    location.reload()
    return false;
}
/*
/**
 * This method gets displayed 3 seconds after a successful registration of a registration number
 */
function showRequestMessage2() {
    setInterval(function showMeesageDiv2() {
        displayName2.innerHTML = 'Please Enter Registration Number';
    }, 4000);
}

/** close the div in 5 secs
window.setTimeout("closeDiv();", 20000);
function closeDiv() {
    var Temp = document.getElementById("p1")
    if (Temp != null)
        Temp.style.display = "none";
}
*/
// ======================EVENTS==============================

//Event listener for the reset button
resetBtn2.addEventListener('click', function () {
    RemoveHtmlElement2()
    localStorage.removeItem(regMapKey2)
    location.reload()
});

//========================Helper Functions=======================

/**
 * This function handles tHe retrieval of the stored array of objects
 * @param {*} key 
 * @returns 
 */
function getLocalStorageObject2(key) {
    let temp = window.localStorage.getItem(key);
    return JSON.parse(temp);
}

/**
 * This function handles appends a new Object in the storage array
 * @param {*} key 
 * @param {*} value 
 */
function setLocalStorageObject2(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function displayNumberPlate2() {
    RemoveHtmlElement2();
    regNumbers2 = getLocalStorageObject2(regMapKey2)
    //Add the data rows.
    //Dynamically add the number plate buttons
    if(regNumbers2 !== null) {
        var divElement = document.getElementById('containerTemp');
        for (var i = 0; i < regNumbers2.length; i++) {
            var button = document.createElement('button');
            var divIdName = 'containerTemp' + i;
            button.setAttribute('id', divIdName)
            button.type = 'button';
            button.innerHTML = regNumbers2[i].regNum2;
            button.className = 'btn-styled';
            divElement.appendChild(button);
    
            // var lineBreak = document.createElement('br');
            // divElement.appendChild(lineBreak);
        }
    }
}
/**
 * This function handles the removal of all the unwanted displyaed registration number divs/buttons
 */
function RemoveHtmlElement2() {
    regNumbers2 = getLocalStorageObject2(regMapKey2)
    var divId = document.getElementById('containerTemp');
    if(regNumbers2 !== null) {
        for (var i = 0; i < regNumbers2.length; i++) {
            var childId = document.getElementById('containerTemp' + i);
            if (childId) {
                divId.removeChild(childId);
            }
        }
    }
}

/**
 * This even listener executes the display of all the registration numbers by town
*/
showBtn2.addEventListener('click', function () {
    var radioBtn = document.querySelector('input[name="radioTown2"]:checked');
    if (radioBtn !== null) {
        displayNumberPlateByTown2(radioBtn.value);
    }
    
});


/**
 * This event listener handles the display of all the number plates persisted in the local storage
 */
showAll2.addEventListener('click', function () {
    displayNumberPlate2()
});


/**
 * This Method handles the functions around adding button display divs dynamically in the body of the html page, specifically for a town
 * @param {*} town 
 */
function displayNumberPlateByTown2(town) {
    RemoveHtmlElement2();
    regNumbers2 = getLocalStorageObject2(regMapKey2)
    //Add the data rows.
    if(regNumbers2 !== null) {
        for (var i = 0; i < regNumbers2.length; i++) {
            var regSubstring  = regNumbers2[i].regNum2;
            if( regSubstring.substr(0, 2) === town) {
                townRegs2.push(regNumbers2[i])
            }
        }
        var divElement = document.getElementById('containerTemp');
        for (var i = 0; i < townRegs2.length; i++) {
            var button = document.createElement('button');
            var divIdName = 'containerTemp' + i;
            button.setAttribute('id', divIdName)
            button.type = 'button';
            button.innerHTML = townRegs2[i].regNum2;
            button.className = 'btn-styled';
            divElement.appendChild(button);
    
            // var lineBreak = document.createElement('br');
            // divElement.appendChild(lineBreak);
        }
    }
    townRegs2 = []
}

