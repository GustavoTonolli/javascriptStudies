// map

// creates a new array from calling a function with each element

/* const courses = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

courses.map((el, i) => {
    console.log("Course: " + el + " - Position of the course: " + i)
    return el
}) */

/* let el = document.getElementsByTagName("div");
el = [...el]
el.map((e, i) => {
    console.log(e.innerHTML)
    e.innerHTML = "JavaScript!"
}) */

/* const element = document.getElementsByTagName("div");

const values = Array.prototype.map.call(element, ({ innerHTML }) => innerHTML);

console.log(values) */

const convertInt = (e) => parseInt(e);
const double = (e) => e * 2;

let num = ["1", "2", "3", "4", "5"].map(double);



console.log(num);
