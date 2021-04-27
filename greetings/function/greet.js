function greetFactory(greetMap){

function greetNow(nameInput, language){

    //Name format fix & Make first letter of name UpperCase
    nameInput = nameInput.toLowerCase();
    let str = nameInput.substr(1, nameInput.length);
    let firstChar = nameInput.charAt(0).toUpperCase();
    nameInput = firstChar+str;

     //counter initialize
     if (localStorage['counter'] === undefined) {
    //local storage can only store strings so convert to store object or arrays
        localStorage.setItem('counter', JSON.stringify(0));
    }

    if (greetMap[nameInput] === undefined) {
        greetMap[nameInput] = 0;
        var counter = JSON.parse(localStorage.getItem('counter'));
        //increament to the counter if the user has not been registered to the map
        localStorage.setItem('counter', JSON.parse(counter + 1));
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
setLang,
greetMap
}
}
