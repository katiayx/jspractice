"use strict";

//start with counter variable, loop condition, update counter
for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ["john", "jane", "mary", "mark", "bob"];

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

//iterate backwards
//start at index 4, i must be greater than or equal to zero, 4-3-2-1 = i--
for (var i = names.length-1; i >= 0; i--) {
	console.log(names[i]);
}

var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}


//break & continue
for (var i = 1; i <= 5; i++) {
	console.log(i);
	
	if (i === 3) {
		break;
	}
}
//print 1, 2, 3, then it will break the loop

for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}

//print 1, 2, 4, 5. when i = 3, it skips console.log and skips to next iteration