// funcoes math

/* const randomNum = Math.random() * 10; // retorna um numero aleatorio entre 1 a 10
const randomInt = Math.floor(randomNum); // retorna apenas o numero inteiro
const randomArrend = Math.round(randomNum) // arrendonda um numero


Math.pow(10, 2) // potencia, base, potencia. 10 elevado a 2
console.log(Math.sqrt(25)) // retorna a raiz quadrada */


const olhos = [...document.getElementsByClassName("olho")]


let posx_mouse = 0;
let posy_mouse = 0;

window.addEventListener("mousemove", (evt) => { // capture mouse position
    posx_mouse = evt.clientX;
    posy_mouse = evt.clientY;

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI; // retorna um angulo de x y em radianos para graus


    olhos.forEach((o) => {
        o.style.transform = "rotate(" + rot + "deg)"; // faz a rotacao em graus
    })
});

// olhos[0].style.transform = "rotate(" + 180 + "deg)"