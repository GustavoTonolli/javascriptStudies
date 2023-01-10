const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcopy = document.getElementById("tcopy")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const teste = document.getElementById("teste")


let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
            } if (display.innerHTML == "0") {
                display.innerHTML = "0,"
            } else {
                display.innerHTML += evt.target.innerHTML
            }

        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }


    });
});
teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }

    });
});

tlimpar.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = 0
})
tcopy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(display.innerHTML)
    /*   teste.select() // mobileS
      teste.setSelectionRange(0, 99999) // mobile
      navigator.clipboard.writeText(teste.value)  copiar de input text  */         // copiar writeText colar readText or read
})
tigual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})