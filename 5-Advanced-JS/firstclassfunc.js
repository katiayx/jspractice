var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}


//multiple callback functions, each with a single task
	
function calcAge(el) {
	return 2016 - el; /*el = element */
}
	
var ages = arrayCalc(years, calcAge);
console.log(ages);



function isFullAge(el) {
	return el >= 18;
}


var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
	
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);


//functions returning function

function intervQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', please explain what UX design is');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log(name + ', which subject do you teach?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do');
		}
	}
}

var teacherQuestion = intervQuestion('teacher'); //teacherQ is the function that is returned when calling IntervQuestion('teacher')

teacherQuestion('john'); //call var teacherQuestion because it is a function

var designerQuestion = intervQuestion('designer');
designerQuestion('john');


//OR:
intervQuestion('teacher')('john');

































	