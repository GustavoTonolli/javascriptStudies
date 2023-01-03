// bit wise operators;

let n1 = 14
let n2 = 20
let n3 = 7

let res = n1 & n2; // returns bit 1 when equivalency. 1 + 1 = 1 | 1 + 0 = 0 and

let res1 = n1 | n2; // returns bit 1 when has 1. 1 + 0 = 1 | 1 + 1 = 1 or

let res2 = n1 ^ n2; // returns bit 1 when has just one 1. 1 + 0 = 1 | 1 + 1 = 0 xor

// bit deslocation

let res3 = n1 >> 1 // deslocating 1 bit to the right;
let res4 = n1 << 2 // deslocating 2 bis to the left;

console.log(res);