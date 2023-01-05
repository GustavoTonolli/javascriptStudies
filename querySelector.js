//   query selector ex

// difference is when I use query selector

// we can use query in general just putting . # ""

const allDivs = [...document.getElementsByTagName("div")];
const c1Courses = [...document.getElementsByClassName("c1")];
const c2Courses = [...document.getElementsByClassName("c2")];
const specialCourse = document.getElementById("c1");

const query_firstDiv = document.querySelector("div,p"); // returns the first div and p
const query_allDivs = document.querySelectorAll("div, .c1"); // returns all divs
const query_class = document.querySelectorAll(".c1"); // returns classes
const query_id = document.querySelectorAll("#c1"); // returns ids
const query_alldivswithclass = document.querySelectorAll("div[class]"); // returns just the divs that has classes
const query_parenting = document.querySelectorAll("div > p"); // return p that has div as father;

c2Courses.map((el) => {
    el.classList.add("destaque")
});
console.log(query_firstDiv);
console.log(query_alldivswithclass)