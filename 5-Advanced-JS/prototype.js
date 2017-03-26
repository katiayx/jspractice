//creating objects using function constructor

var john = {
	name:'John',
	year: 1990,
	job: 'teacher',
};


//Function Constructor - Person object blueprint
var Person = function(name, year, job) {
	this.name = name;
	this.year = year;
	this.job = job;
}

//inheriting from function constructor's prototype property
Person.prototype.calcAge = 
	function() {
		console.log(2016-this.year)
	}

Person.prototype.lastName = 'Smith';

//instantiation
var john = new Person('John', 1990, 'teacher'); 

john.calcAge();

//new creates empty Person object, calls the Person function, and points 'this' to the empty object created.

//after function is called, 'this' is referring to the newly created Person object, and this new object is assigned to variable 'john'

var jane = new Person('Jane', 1969, 'designer');
jane.calcAge();
var mark = new Person('Mark', 1948, 'retired');
mark.calcAge(); 

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//function constructor for creating Animals
var Animal = function(name, legs, sound, year) {
	this.name = name;
	this.legs = legs;
	this.sound = sound;
	this.year = year;
}

//animal prototype property - prototype inheritance
Animal.prototype.calcAge = function() {
	var age = 2016-this.year;
	console.log(this.name + ' is ' + age);
}

//instances of Animal
var cat = new Animal('Cat', 4, 'meow', 2012);
var bat = new Animal('Bat', 2, 'ggg', 1990);
var seal = new Animal('Seal', 0, 'yeek', 2015);

cat.calcAge();
bat.calcAge();
seal.calcAge();




























//