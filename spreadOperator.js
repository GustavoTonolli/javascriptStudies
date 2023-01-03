// it breaks an array and separate it

array1 = [1, 2, 5];
array2 = [3, 22, 154, 12431];
array3 = [...array1]; // makes a copy of array1
array4 = [...array1, ...array2];

console.log("Array 1: " + array1);
console.log("Array 2: " + array2);
console.log("Array 3: " + array3);
console.log("Array 4: " + array4);

// it can copy from objects too

const person1 = {
    name: "Paulo",
    age: 15,
    country: "United States"
}
const person2 = {
    name: "Bruno",
    age: 17,
    city: "San Francisco"
    
}
const person3 = {
    ...person1,...person2
}

console.log(person3)

// spread with functions

const soma = (v1, v2, v3) => {
    return v1+v2+v3;
}

valores = [1, 5, 4]

console.log(soma(valores)); // this will throw an error
console.log(soma(...valores)); // this will work

// using spread operator to manipulate DOM

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")]; // spread the divs into separated elements inside the array.

/* objs1.forEach(element => {
    element.innerHTML = "Awesome!!!"
}); // this one will throw an error. */

objs2.forEach(element => {
    element.innerHTML = "Awesome!!!"
}); // this one will work fine.

