// using for in and for of

let numbers = [10, 20, 30, 40, 50];

/* for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} */
for (number in numbers) { // If I want the position I use for in;
    console.log(numbers[number])
}
for (number of numbers) { //if i want the elements I use for of;
    console.log(number)
}

const objs = document.getElementsByTagName("div")

for (o in objs) {
    console.log(objs[o].innerHTML = "WOW!")
}
for (o of objs) {
    console.log(o.innerHTML = "WOW!")
}
