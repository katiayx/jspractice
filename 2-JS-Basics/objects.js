"use strict";

//v1.0
var john = {
	name: 'john',
	lastName: 'smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calcAge: function() {
		//this is a function expression 
		return 2016 - this.yearOfBirth;
		//using this. to use included key for same object. this refers to john instance
	}
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);

//object methods: replace john with this
console.log(john.calcAge());

var age = john.calcAge();
john.age = age;
console.log(john);

//grab elements
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

//data mutation

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);


var jane = new Object();
jane.name = 'jane';
jane.lastName = 'smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired'
jane['isMarried'] = true
console.log(jane);

//v2.0
var john = {
	name: 'john',
	lastName: 'smith',
	yearOfBirth: 1945,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calcAge: function() { 
		this.age = 2016 - this.yearOfBirth;
		//when calling method, create a new var/prop inside John object called age, then calculate the value and assign it to this property
	}
};

john.calcAge();
console.log(john);
//all keys/values are properties of object

