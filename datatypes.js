// Data Types JavaScript
// there are five primitive or basic types of data in JavaScript.
// strings, numbers, boolean, null and undefined.
/* 

string = "Gustavo";
number = 15;
boolean = true or false;
null = empty;
undefined = a variable without a value, has the value undefined. The type is also undefined.

and we still have object, symbols and BigInt;

*/

// Numbers:
let length = 16; // integer;
let weight = 7.5; // float number;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
//

// let exponential notation

let h = 123e5;    // 12300000
let g = 123e-5;   // 0.00123

/* 

JavaScript BigInt
All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

*/

let o = BigInt("123456789012345678901234567890");

/* BOOLEANS

booleans can return only two values, true or false.
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

*/

/* The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression: */

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

let car;    // Value is undefined, type is undefined;

car = undefined; // use undefined to empty a variable;