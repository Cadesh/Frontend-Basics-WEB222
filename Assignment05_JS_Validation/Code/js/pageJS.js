
/*
Author: Andre 
Date: 29 MAR 2018
*/

var LinkList = [{
    name: "Home",
    link: "index.html"
}, {
    name: "Registration",
    link: "registration.html"
}, {
    name: "About",
    link: "about.html"
}];

var ListTested = [{
    name: "Chrome",
    version: "65"
}, {
    name: "Firefox",
    version: "58"
}, {
    name: "Edge",
    version: "41"
}];

//functions to run on window load
window.onload = function () {
    loadMenuButtons();
    loadBrowserList();
}

//This function loads the link menu on all pages. 
var loadMenuButtons = function () {
    for (var i = 0; i < LinkList.length; i++) {

        var buttons = document.getElementById("loadMenuButtons");
        var itemUL = document.createElement("ul");
        var itemLI = document.createElement("li");
        var itemA = document.createElement("a");

        var itemTxt = document.createTextNode(LinkList[i].name);

        itemA.setAttribute("href", LinkList[i].link);
        itemA.appendChild(itemTxt);
        itemLI.appendChild(itemA);
        itemUL.appendChild(itemLI);
        buttons.appendChild(itemUL);
    }
};


var loadBrowserList = function () {
    for (var i = 0; i < ListTested.length; i++) {

        var browList = document.getElementById("loadBrowserList");
        var itemUL = document.createElement("ul");
        var itemLI = document.createElement("li");

        var itemTxt = document.createTextNode(ListTested[i].name + " v. " + ListTested[i].version);

        itemLI.appendChild(itemTxt);
        itemUL.appendChild(itemLI);
        browList.appendChild(itemUL);
    }

};