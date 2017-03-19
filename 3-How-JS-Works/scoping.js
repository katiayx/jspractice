
///////////////////////////////////////
// Scoping

var a = 'Hello!'; //global scope
first(); //function hoisting

function first() {
    var b = 'Hi!';
    second();

    function second() { //has access for var b
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third() //third function also sits in the global scope chain
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);//can only access a, d, not b, c
}



