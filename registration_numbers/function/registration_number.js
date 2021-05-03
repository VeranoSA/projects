function regFactory(){
//Holding local storage
    //var local = {}
    //var counter = 0
    var regStorage = []
//Setting the local object by passing the local storage
    //function setlocal(name){
        //local = name
    //}
//Getting the local object
    //function getlocal(){
        //return local
    //}

    //function getCounter(){
        //return counter
    //}

function regNumber(reg){

    //Name format fix & Make first letter of name UpperCase
    //reg = reg.toLowerCase();
        //let str = reg.substr(1, reg.length);
        //let str2 = reg.substr(2, reg);

        //let firstChar = reg.charAt(0).toUpperCase();
        //let secondChar = reg.charAt(1).toUpperCase();
        //reg = firstChar+ secondChar+ str

    if (reg.startsWith("CA") || reg.startsWith("CL") || reg.startsWith("CY") || reg.startsWith("CJ")){
        regStorage.push(reg)
    }
    return regStorage
// Check if the name is there, if the name is not there its going to push the name to the object
    //if (local[nameInput] === undefined) {
     //   local[nameInput] = 0;
     //   counter++
    
   // } 
    //If the name is there just increment the value
    //else{
    //    local[nameInput]++;
    //}
    //return greeting based on selected language
    //if(language === "English"){
     //   return 'Hello ' + nameInput + '!!!'

    //}
    //if(language === "Zulu"){
     //   return 'Sawubona ' + nameInput + '!!!'

    //}
    //if(language === "Tsonga"){
     //   return 'Avuxeni ' + nameInput + '!!!'

    //}
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
regNumber,
//greetNow,
//setlocal,
//setLang,
//getlocal,
// greetMap,
//getCounter
}
}
