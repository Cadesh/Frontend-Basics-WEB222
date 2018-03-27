/********************************************************************************* 
 *
 * WEB222 – Assignment #4a
 *
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy. No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students. 
 * 
 * Name: ANDRE  R Student ID:  Date: 17 MARCH 2018 
 * 
 ********************************************************************************/


var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

//-------------------------------------------------------------------------
window.onload = function () {
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
};
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
var loadTableWithFilters = function (pType, pMin, pMax) {

    var lTable = document.querySelector("#main-table-body");
   // lTable.innerHTML = ""; //clear screen

    var table = "";
    //can be used for combined filters with type, minAge and maxAge
    if (pType == "") {
        for (var j = 0; j < petData.length; j++) {
            if ((petData[j]["age"] >= pMin) && (petData[j]["age"] <= pMax)) {
                table += buildProfile(petData[j]);
            } //if
        } //for
    } //if pType
    else {
        for (var j = 0; j < petData.length; j++) {
            if ((petData[j]["type"] === pType) && (petData[j]["age"] >= pMin) && (petData[j]["age"] <= pMax)) {
                table += buildProfile(petData[j]);
            }
        }
    } //else
    lTable.innerHTML = table; //just used 1 innerHTML on code.
};

//-------------------------------------------------------------------------
var buildProfile = function (obj) {

    var profile = "<tr><td><img src='" + obj["image"]["src"] +
        "' alt='" + obj["image"]["alt"] +
        "' height='" + obj["image"]["height"] + "' width= '" + obj["image"]["width"] + "'>" +
        "</td><td><h4>" + obj["name"] + "</h4><p>" + obj["description"] + "</p>" +
        "<span>Age: " + obj["age"] + " years old.</span></td>";
    return profile;
};

//-------------------------------------------------------------------------
var filterDog = function () {

    loadTableWithFilters("dog", filterAgeMin, filterAgeMax);
};
var filterCat = function () {

    loadTableWithFilters("cat", filterAgeMin, filterAgeMax);
};
var filterBird = function () {

    loadTableWithFilters("bird", filterAgeMin, filterAgeMax);
};
var filter_zero_1 = function () {

    loadTableWithFilters("", 0, 1);
};
var filter_1_3 = function () {

    loadTableWithFilters("", 1, 3);
};
var filter_4_plus = function () {

    loadTableWithFilters("", 4, filterAgeMax);
};
var filterAllPets = function () {

    loadTableWithFilters("", filterAgeMin, filterAgeMax);
};

//USED TO TEST FORMAT
/*
table += "<tr><td><img src='https://zenit.senecac.on.ca/~tanvir.alam/shared/winter-2017/web222/assignment4/pets/Bella.jpg'" +  
"alt='Bella' height='160' width='120'></td>" +
"<td><h4>Bella</h4><p><span>Bella</span> is a bright young pup who loves being around other dogs and doesn't mind the odd " + 
"cat.<br>Her <span>favourite treat</span> is <span>bacon</span> - anything <span>bacon</span>.</p><span>Age: 0.5 years old.</span></td> ";
*/