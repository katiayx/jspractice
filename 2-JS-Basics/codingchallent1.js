var johnHeight = prompt("What's John's Height");
var johnAge = prompt("How old is John?");
var frHeight = prompt("How tall is friend?");
var frAge = prompt("How old is the friend?");
var fr2Height = prompt("What's friend2's height?");
var fr2Age = prompt("How old is friend2?");


function calcScore(height, age) {
	var score = height + age * 5;
	return score;
}

calcScore(johnHeight, johnAge);
calcScore(fr2Height, fr2Age);
calcScore(frHeight, frAge);


if (johnScore > frScore && johnScore > fr2Score) {
    console.log('John wins with ' + johnScore + ' ' + 'points!');
} else if (frScore > johnScore && frScore > fr2Score) {
    console.log('Friend wins with ' + frScore + ' ' + 'points!');
} else if (fr2Score > johnScore && fr2Score > frScore) {
    console.log('Friend2 wins with ' + fr2Score + ' ' + 'points!');
} else {
	console.log('There is no winner, both players received ' + johnScore + ' ' + 'points.');
}




