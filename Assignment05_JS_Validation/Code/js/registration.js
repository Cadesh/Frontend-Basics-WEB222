
/*
Author: Andre 
Date: 29 MAR 2018
*/


//FUNCTIONS FOR REGISTER PAGE
//////////////////////////////////////
function validateForm() {

    var msgError = [];

    clearerrors();
    valPsw(msgError);
    valName(msgError);
    valUnitNum(msgError);
    valStNumber(msgError);
    valStreet(msgError);
    valZIP(msgError);
    valCity(msgError);
    valPhone(msgError);

    if (msgError.length == 0) {
        return true;
    } else {
        printError(msgError);
        return false;
    }

};

function clearerrors() {
    document.querySelector("#errors").innerHTML = "";
};

//VALIDATE CITY
function valCity(msgError) {

    var zip = document.forms["signup"]["cit"].value;

    var test = zip.match(/^[a-zA-Z].*$/);
    if (test === null) {
        msgError.push("City can only have letters.");
    }
    return msgError;
};


//VALIDATE PHONE
function valZIP(msgError) {

    var zip = document.forms["signup"]["zip"].value;

    var test = zip.match(/[a-zA-Z][0-9][a-zA-Z] ?[0-9][a-zA-Z][0-9]/);
    if (test === null) {
        msgError.push("Zip Code must follow the rule 'letter-number-letter number-letter-number'.");
    }
    return msgError;
};

//VALIDATE PHONE
function valPhone(msgError) {

    var phone = document.forms["signup"]["phone"].value;

    var test = phone.match(/^([0-9]{3}[-]){2}[0-9]{4}$/);
    if (test === null) {
        msgError.push("Phone must have 3 digits (dash) 3 digits (dash) 4 digits.");
    }
    return msgError;
};

//VALIDATE UNIT NUMBER
function valUnitNum(msgError) {

    var num = document.forms["signup"]["unitNum"].value;

    var test = num.match(/^[0-9].*$/);
    if (test === null) {
        msgError.push("Unit Number can only have numbers.");
    }
    return msgError;
};

//VALIDATE STREET NUMBER
function valStNumber(msgError) {

    var name = document.forms["signup"]["stNum"].value;

    var test = name.match(/^[0-9].*$/);
    if (test === null) {
        msgError.push("Street Number can only have numbers.");
    }
    return msgError;
};

//VALIDATE STREET
function valStreet(msgError) {

    var name = document.forms["signup"]["street"].value;

    var test = name.match(/^[a-zA-Z].*$/);
    if (test === null) {
        msgError.push("Street Name can only have letters.");
    }
    return msgError;
};

//VALIDATE NAME
function valName(msgError) {

    var name = document.forms["signup"]["name"].value;

    if (name.length != 6) {
        msgError.push("Name must be 6 long.");
    }
    var test = name.match(/^[a-zA-Z]{1}.*$/);
    if (test === null) {
        msgError.push("Name must begin with letter. ");
    }
    return msgError;
};


// must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase
//VALIDATE PASSWORD
function valPsw(msgError) {
    //document.querySelector("#errors").innerHTML += "entrou   ";

    var psw = document.forms["signup"]["psw1"].value;
    var ps2 = document.forms["signup"]["psw2"].value;

    var error = [];

    if (psw.length != 8) {
        //document.querySelector("#errors").innerHTML += "Password must be 8 long.";
        msgError.push("Password must be 8 long.");
    }
    var test = psw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/);
    if (test === null) {
        msgError.push("Password must have at least one capital letter and one digit.");
    }
    if (psw !== ps2) {
        msgError.push("You must type the Password on field Retype Password.");
    }

    return msgError;
};

//PRINT ON RIGHT PANEL THE INPUT ERRORS
function printError(msgError) {
    var Quant = msgError.length;
    if (Quant > 8) {
        Quant = 8;
    }

    var errorList = document.getElementById("errors");
    var itemP = document.createElement("p");
    var itemTitle = document.createTextNode("ATTENTION:");
    itemP.appendChild(itemTitle);
    errorList.appendChild(itemP);

    for (var i = 0; i < Quant; i++) {
        // document.querySelector("#errors").innerHTML += "<p>" + msgError[i] + "</p>";
        var errorList = document.getElementById("errors");
        var itemUL = document.createElement("ul");
        var itemLI = document.createElement("li");

        var itemTxt = document.createTextNode(msgError[i]);

        itemLI.setAttribute("id", "errorList");
        itemLI.style.fontSize = "small";
        itemLI.style.color = "gold";

        itemLI.appendChild(itemTxt);
        itemUL.appendChild(itemLI);
        errorList.appendChild(itemUL);

    }
};
//turn all to uppercase
/*
function toUpper(str) {
    var content = document.getElementById(str);
    content.value = content.value.toUpperCase();
};
//////////////////////////////////////
function toLower(str) {
    var content = document.getElementById(str);
    content.value = content.value.toLowerCase();
};*/
//////////////////////////////////////