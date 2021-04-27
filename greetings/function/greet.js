function greet(){

function greetNow(nameInput, language){

    //Name format fix & Make first letter of name UpperCase
    nameInput = nameInput.toLowerCase();
    let str = nameInput.substr(1, nameInput.length);
    let firstChar = nameInput.charAt(0).toUpperCase();
    nameInput = firstChar+str;

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

return {
greetNow,
}
}  