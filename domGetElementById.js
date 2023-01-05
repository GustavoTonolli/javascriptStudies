// DOM - DOCUMENT OBJECT MODEL get element by id

/* const dc1 = document.getElementById("c1")
console.log(dc1);
console.log(dc1.id);
console.log(dc1.innerHTML)

dc1.innerHTML = "Awesome!!" */

const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");

const arrayElements = [dc1, dc2, dc3, dc4, dc5];

arrayElements.map((e) => {
    e.innerHTML = "wow!"
})

