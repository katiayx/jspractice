//IIFE - create a new scope that's hidden from outside scope/data privacy. Not to create reuseable code

function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

//game();

(function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}());

(function game(goodluck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
}(5));