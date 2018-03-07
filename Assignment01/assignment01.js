/*********************************************************************************
* WEB222 SGG – Assignment 01
* I declare that this assignment is my own work in accordance with 
* Seneca Academic Policy. No part of this assignment has been copied 
* manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Date: 24 JAN 2018
*
********************************************************************************/

/*****************************
* Task 1 
*****************************/
//define variables
var student = {name:"", program:"", courses:0, partJob:false}; 
var pTimeJob = "don't have";

//get student name, number of courses, program, part time job (true/false)
student["name"] = prompt("Enter your name: ", "Andre");
student["program"] = prompt("Enter your program: ", "CPA");
student["courses"] = prompt("Enter number of courses: ", 1);
student["partJob"] = prompt("Part time job: ", false);


  console.log(student);


//output 
console.log("My name is " + student["name"] + ".");
console.log("I am in " + student["program"] + " program.");
console.log("I am taking " + student["courses"] + " course(s) in this semester.");


if (student["partJob"] === true) {
  pTimeJob = "have";
} else {
  pTimeJob = "don't have";
}
console.log("I " + pTimeJob + " a part-time job now.");

/***************************** 
* Task 2
*****************************/ 
var currentYear = new Date().getFullYear();
var userAge = 0;
//console.log(currentYear);

var userAge = prompt("Please enter your age: ",0);
console.log("You were born in the year of " + (currentYear - userAge) + ".");

var studyYears = prompt("Enter the number of years you expect to study in the college: ",2);
console.log("You will graduate from Seneca college in the year of " + (currentYear + +studyYears) + ".");
//current year + +studyYear //force the integer sum, must put a space between + + 


/***************************** 
* Task 3
*****************************/ 
var tempCelsius = 38;
var tempFahren = tempCelsius * (9/5) + 32;
console.log(tempCelsius + "°C is " + tempFahren + "°F");
tempCelsius = (tempFahren - 32) * 5/9;
console.log(tempFahren + "°F is " + tempCelsius + "°C");

/*****************************
* Task 4
*****************************/
for (var i = 0; i < 10; i++) {   // 

  var rest = i % 2;
  if (rest === 1){
       console.log(i + " is odd");
  }
  else {
       console.log(i + " is even");
  }
}

/*****************************
* Task 5
*****************************/
var number1, number2;
//DECLARATION APPROACH
function largerNum (number1, number2) { 
  if (number1 > number2){
    return number1;
  }
    return number2; 
} 
//EXPRESSION APPROACH
var greaterNum = function (number1, number2) {
  if (number1 > number2){
    return number1;
  }
    return number2; 
} 

var numberA = 3; var numberB = 7;
console.log( "The larger number of "+ numberA +" and "+ numberB +" is " + largerNum(numberA, numberB) );
numberA = 54; numberB = 21;
console.log( "The larger number of "+ numberA +" and "+ numberB +" is " + largerNum(numberA, numberB) );
numberA = 3; numberB = 7;
console.log( "The greater number of "+ numberA +" and "+ numberB +" is " + greaterNum(numberA, numberB) );
numberA = 67; numberB = 34;
console.log( "The greater number of "+ numberA +" and "+ numberB +" is " + greaterNum(numberA, numberB) );

/*****************************
* Task 6
*****************************/
//DECLARATION APPROACH WITH UNKNOWN NUMBER OF ARGUMENTS
function Evaluator() {
  var sum = 0;
  var numArgs = arguments.length;
  for (var i=0; i<numArgs; i++) { 
    sum += arguments[i]; 
  } 
  if ((sum/numArgs) < 50) {
    return false;
  }
  return true;
}
console.log("Average greater than or equal to 50: " + Evaluator(20,45));
console.log("Average greater than or equal to 50: " + Evaluator(20,34,67,98,56));
console.log("Average greater than or equal to 50: " + Evaluator(45,45,56,76,87,23,45,79));

/*****************************
* Task 7
*****************************/
//EXPRESSION APPROACH
var number = 0;
var Grader = function (number) {
  if (number >= 90) {return "A+";} 
  else if (number >= 80) {return "A";}
  else if (number >= 75) {return "B+";}
  else if (number >= 70) {return "B";}
  else if (number >= 65) {return "C+";}
  else if (number >= 60) {return "C";}
  else if (number >= 55) {return "D+";}
  else if (number >= 50) {return "D";}
  else return "F";
}
console.log( "Your final grade is: " + Grader(49));
console.log( "Your final grade is: " + Grader(93));
console.log( "Your final grade is: " + Grader(67));

/*****************************
* Task 8
*****************************/
//DECLARATION APPROACH 
var num;
var numMultiples;
function showMultiples (num, numMultiples) {
   console.log(numMultiples + " Multiples of " + num);
   for (var i = 1; i <= numMultiples; i++) {
     console.log(num + "x" + i + "=" + (num*i));
   }
}
showMultiples (5,4);
showMultiples (6,7);
showMultiples (9,9);

/*****************************
*****************************/


