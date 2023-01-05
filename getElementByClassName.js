// get elements by class name examples, very useful with css

const allCourses = [...document.getElementsByClassName("curso")];
const c1Courses = [...document.getElementsByClassName("c1")];
const c2Courses = [...document.getElementsByClassName("c2")];
const specialCourse = document.getElementsByClassName("curso")[1];

c2Courses.map((el) => {
    el.classList.add("destaque")
});

specialCourse.innerHTML = "asdas"
console.log(allCourses);
console.log(c1Courses);
console.log(specialCourse);