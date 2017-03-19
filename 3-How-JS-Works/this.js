"use strict;"

//console.log(this);

calcAge(1985);
function calcAge(year) {
	console.log(2016-year);
	console.log(this);
}

//regular function call, this always points to global(window) object


var john = {
	name: 'john',
	year: 1990,
	calcAge: function() {
		console.log(this); //refers to john obj
		console.log(2016-this.year);
		
//		function innerFunction() {//regular function, that why this is the window object
//			console.log(this);
//		}
//		innerFunction();
	}
}

john.calcAge();

var mike = {
	name: 'mike',
	year: 1984,
}
//method borrowing
mike.calcAge = john.calcAge;
mike.calcAge();