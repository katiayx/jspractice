'use strict';

function calcAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calcAge(1990);
var ageMike = calcAge(1969);
var ageMary = calcAge(1948);

//function calling other function
function yearsUntilRetirement(name, year) {
	var age = calcAge(year);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years');	
	} else {
		console.log(name + " has already retired");
	}
}
	

yearsUntilRetirement('john', 1990);
yearsUntilRetirement('mike', 1968);
yearsUntilRetirement('mary', 1948);

//statements and expressions

//function statement = performs an action, doesn't produce an immediate value
function someFun(par) {
	//code 
}

//function expression = produces a value/outcome
var someFun = function(par) {
	//code 
}

//expressions
3 + 4;
var x = 3;

//statement
if (x === 5) {
	//do something
}