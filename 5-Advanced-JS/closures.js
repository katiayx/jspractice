function retire(retirementAge) {
	var a = ' years until retirement';
	return function(year) {
		var age = 2016 - year;
		console.log((retirementAge - age) + a);
	} //closure - has access to retirementAge and a
}

var retirementUS = retire(66);
retirementUS(1990);

var retirementDe = retire(65)(1990);
var retirementIce = retire(67)(1990);

//function intervQuestion(job) {
//	if (job === 'designer') {
//		return function(name) {
//			console.log(name + ', please explain what UX design is');
//		}
//	} else if (job === 'teacher') {
//		return function(name) {
//			console.log(name + ', which subject do you teach?');
//		}
//	} else {
//		return function(name) {
//			console.log('Hello ' + name + ', what do you do');
//		}
//	}
//}

//refactored using closure -- cleaner code
function intQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', please explain what UX design is');
		} else if (job === 'teacher') {
			console.log(name + ', which subject do you teach?');
		} else {
			console.log('Hello ' + name + ', what do you do');
		}
	}
}

intQuestion('teacher')('mark');

