function greetFactory(){
//Holding local storage
    var local = {}
    var counter = 0
//Setting the local object by passing the local storage
    function setlocal(name){
        local = name
    }
//Getting the local object
    function getlocal(){
        return local
    }

    function getCounter(){
        return counter
    }

function greetNow(nameInput, language){

    //Name format fix & Make first letter of name UpperCase
    nameInput = nameInput.toLowerCase();
    let str = nameInput.substr(1, nameInput.length);
    let firstChar = nameInput.charAt(0).toUpperCase();
    nameInput = firstChar+str;
// Check if the name is there, if the name is not there its going to push the name to the object
    if (local[nameInput] === undefined) {
        local[nameInput] = 0;
        counter++
    
    } 
    //If the name is there just increment the value
    else{
        local[nameInput]++;
    }
    //return greeting based on selected language
    if(language === "English"){
        return 'Hello ' + nameInput + '!!!'

    }
    if(language === "Zulu"){
        return 'Sawubona ' + nameInput + '!!!'

    }
    if(language === "Tsonga"){
        return 'Avuxeni ' + nameInput + '!!!'

    }
}
 //function that returns the checked language button 
 var setLang = function (value) {
    var lang = '';
    if (value === 'English') {
        lang = 'English';
    }
    if (value === 'Zulu') {
        lang = 'Zulu';
    }
    if (value === 'Tsonga') {
        lang = 'Tsonga';
    }
    return lang
}

return {
greetNow,
setlocal,
setLang,
getlocal,
// greetMap,
getCounter
}
}
