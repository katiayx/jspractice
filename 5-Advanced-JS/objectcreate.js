//Another way to create objects that inherite from the prototype using Object.create

var personProto = {
	calcAge: function () {
		console.log(2016-this.year);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.year = 1990;
john.job = 'teacher';


//pass params in the jane object all at once
var jane = Object.create(personProto, 
{
	name: { value: 'jane' },
	year: { value: '1969' },
	job: { value: 'designer' },
});

 