// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

//makes the JS run after the window is loaded
window.onload = function () {

    //create the fruit list
    var lFruits = document.querySelector("#outputFruits");
    var llist = buildOrderedList(fruits);
    lFruits.innerHTML += "<ol>" + llist + "</ol>";


    var lDir = document.querySelector("#outputDir");
    //Recursive function to build the directory tree
    var dlist = buildDirTree(directory);
    lDir.innerHTML += "<ul>" + dlist + "</ul>";
};

//---------------------------------------------------
buildOrderedList = function(obj) {
    var llist = "";
    for (var i = 0; i < obj.length; i++) {
        llist += "<li>" + obj[i] + "</li>";
    }
    return llist;
};
//---------------------------------------------------
//---------------------------------------------------
buildDirTree = function (obj) {
    var dlist = ""; 
    for (var i = 0; i < obj.length; i++) {
    
      if (obj[i]["type"] === "file") { //its a file
          dlist += "<li>" + obj[i]["name"] + "</li>";
      } 
      else { //it is a directory, call function!
          dlist += "<li>" + obj[i]["name"] + "</li><ul>";
          dlist += buildDirTree(obj[i]["files"]);
          dlist += "</ul>";
      }
    }
    return dlist;
};
//---------------------------------------------------

    /* //First attempt, non recursive solution
    for (var i = 0; i < directory.length; i++) {
        if (directory[i]["type"] === "file") { //its a file
            dlist += "<li>" + directory[i]["name"] + "</li>";
        } 
        else { //it is a directory
            dlist += "<li>" + directory[i]["name"] + "</li><ul>";
    
            for (var j = 0; j < directory[i]["files"].length; j++) {
                if (directory[i]["files"][j]["type"] === "file") { //its a file
                    dlist += "<li>" + directory[i]["files"][j]["name"] + "</li>";     
                }
            }
            dlist += "</ul>";
        }
    }
    lDir.innerHTML = "<ul>" + dlist + "</ul>";*/

// object to test the recursive function
/*
var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]},
    {type: "directory", name: "Recursive Dir", files: [{type: "directory", name: "Recursive Files", files: [{type: "file", name: "111"},
                                                       {type: "file", name: "222"}]},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];*/