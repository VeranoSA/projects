function regFactory(){
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

function regNumber(regStart, numbers){

//Name format fix & Make first letter of name UpperCase
regStart = regStart.toUpperCase();

// Check if the registration is there, if the registration is not there its going to push the name to the object
if (local[regStart, numbers] === undefined) {
        local[regStart, numbers] = 0;
         counter++
    }
//If the registration is there just increment the value
     else{
       local[regStart, numbers]++;
    }
if(regStart === "CA"){

    return regStart +" "+ numbers
}
if(regStart === "CJ"){

    return regStart +" "+ numbers
}
if(regStart === "CY"){

    return regStart +" "+ numbers
}
if(regStart === "CL"){

    return regStart +" "+ numbers
}
}   

 //function that returns the checked language button 
 //var setLang = function (value) {
  //  var lang = '';
   // if (value === 'English') {
      //  lang = 'English';
   // }
    //if (value === 'Zulu') {
        //lang = 'Zulu';
    //}
    //if (value === 'Tsonga') {
     //   lang = 'Tsonga';
    //}
    //return lang
//}

return {
regNumber,
//greetNow,
setlocal,
//setLang,
getlocal,
// greetMap,
getCounter
}
}
