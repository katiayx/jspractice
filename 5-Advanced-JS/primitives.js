//primitives vs objects

//variable associated with primitive actually contains the primitive data

var a = 23;
var b = a; //copied the value of a -> b

a = 46; //updated 23 to 46 for a, b is not affected
console.log(a);
console.log(b);


//variable associated with objects do not actually contain the object, contain a reference point to the place in memory where the object sits

var obj1 = {
	name: 'john',
	age: 26,
};

var obj2 = obj1; //no copy is created, obj2 is a new reference that points to obj1
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//function is an object, so it works in the same way
var age = 27;
var obj = {
	name: 'jonas',
	city: 'Lisbon',
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);
console.log(age); /*since it's a primitive, it remained unchanged regardless what happens to the same variable in the function, still 27*/
console.log(obj.city);

