const c1 = [...document.querySelectorAll(".curso")];
const caixa1 = document.querySelector("#caixa1");

/* console.log(caixa1.children[0]);

caixa1.children[0].innerHTML = "Fullstack"

console.log(caixa1.hasChildNodes()); // to see if the element has child;

console.log(c1[0].children.length > 0 ? "Possui filhos" : "Nao possui filhos"); */

// create dom elements and assign elements;

const courses = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT", "C#", "REACT NATIVE"]

courses.map((el, i) => {

    const newElement = document.createElement("div");
    newElement.setAttribute("id", "c" + (i + 1)); // set id
    newElement.setAttribute("class", "curso c1"); // set clas
    newElement.innerHTML = el; // change text
    const btn_lixeira = document.createElement("img");
    btn_lixeira.setAttribute("src", "./lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    newElement.appendChild(btn_lixeira)
    btn_lixeira.addEventListener("click", (evt) => { // remove element from DOM
        console.log("Item removido")
        caixa1.removeChild(evt.target.parentNode);
    });
    caixa1.appendChild(newElement) // assign to parent

});








