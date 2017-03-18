"use strict";

var john = ['John', 'Smith', 1990, 'teacher', false];

//append method
john.push('blue');

//add an element at the beginning of array
john.unshift('Mr.');

//pop, and returns removed value
john.pop();

//removes from beginning
john.shift()

//returns index of element passed
john.indexOf(1990)

//see if an element in the array: if element is NOT there, returns -1. so If not true, then function returns -1, which is equal to -1
if (john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher')
} 