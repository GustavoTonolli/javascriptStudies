// functions
// a block of commands that I can execute anytime.
// traditional function functionName(parameters) {code}

/* function myName() {
    console.log("Gustavo Tonolli")
}


for (let i = 0; i < 10; i++) {
    myName();
} */

// function with return

function other() {
    let n1 = 10;
    let n2 = 15;
    let res = n1 * n2;

    return res
}
let num = other()
console.log(num)

// function with parameters

function sum(p1, p2) {
    console.log(p1 + p2);
}

sum(10, 5);
const DEFAULT_VALUE = 0
function sum1(p1 = DEFAULT_VALUE, p2 = DEFAULT_VALUE) { // parameter with default value
    return p1 + p2;
}

let res1 = sum1(10, 20);
console.log(res1)