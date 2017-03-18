var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3+5)*4 -6;
console.log(ageJohn);
console.log(ageMark);
//both are 26, because = associateivity is right to left, so ageMark is rebinded to 26, and then ageJohn is rebinded to 26.
//if it were other way around, associativity is left to right, then ageJohn is still 30, and so is ageMark

//add 1:
ageJohn++;
//ageMark = ageMark * 2
ageMark *= 2;

//switch statment
var job = 'teacher'
job = prompt('what does John do?');

switch (job) {
    case 'teacher':
        console.log('John teachers kids');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    default:
        console.log('John has a job');
}
