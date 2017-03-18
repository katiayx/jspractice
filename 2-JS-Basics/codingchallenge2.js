"use strict;"

var birthYears = [1978, 1985, 1991, 2001];

function getAge(birthYears) {
	var ageList = []; //variable needs to exist within function, otherwise, when function is later called, list gets appended and/or updated
	for (var i = 0; i < birthYears.length; i++) {
		ageList[i] = 2016 - birthYears[i];
	};
	return ageList;
}

function adultOrNot(ageList) {
	var isAdult = []; //variable needs to exist within function, otherwise, when function is later called, list gets appended and/or updated
	var i = 0;
	while (i < ageList.length) {
		if (ageList[i] <= 18) {
			console.log("person " + (i + 1) + " is NOT an adult at " + ageList[i] + " years of age.");
			isAdult.push(false);
		} else {
			console.log("person " + (i + 1) + " is an adult at " + ageList[i] + " years of age.");
			isAdult.push(true);
		};
		i++;
	};
	return isAdult;
}

var printFullAge = function(birthYears) {
	var ages = getAge(birthYears);
	var adultYes = adultOrNot(ages);
	return [ages, adultYes];	
}

var full1 = new printFullAge(birthYears);
var full2 = new printFullAge([2012, 1915, 1999]);





