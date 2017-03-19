"use strict;"
//function hoisting
calcAge(1965); //can invoke function before function is executed/declared -- only works for function declarations/statements --most important aspect of hoisting

function calcAge(year) {
	console.log(2016 - year);
}

calcAge(1990);


//function expressions
//retirement(1965) //doesn't work for function expressions

var retirement = function(year) {
	console.log(65 - (2016 - year));
}

retirement(1990);


//variable hositing
console.log(age); //undefined, JS know there will be an age variable, but before execution phase it's always undefined

var age = 23; //stored in global execution context object


function foo() {
	console.log(age);//still undefined
	var age = 65;
	console.log(age);
}

foo() //gets its own execution context

console.log(age); //refers to global age variable














///////////////////////////////////////
// Lecture: The this keyword









