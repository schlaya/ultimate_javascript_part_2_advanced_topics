// Primitives
const valueTypes = [Number, String, Boolean, Symbol, undefined, null];

const referenceTypes = [Object, Function, Array];

//Primitives
let x = 10;
let y = x;

// here y will be logged as 10 because they are
// both independant values
x = 20;
//

//References
let a = { value: 10 };
let b = a;

// here b will be logged as 20 because the value
// object is stored somewhere else in the memory,
// now both a and b point to the same reference
a.value = 20;

//
let number = 10;

// still logs 10 because its value is copied into
// this paramater that is local in the function
function increase(number) {
    number++;
}

increase(number);
console.log(number);

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

// this will log 11 because it will acces the same
// reference as the obj originally