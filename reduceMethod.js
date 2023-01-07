// permite fazer reducao do array
// metodo reduce e um callback function, vai trabalhar com os elementos do array;
// parametros previous value, current value, current index, array;
// nos permite operar todos os elementos de um array, soma elemento anterior com o atual por exemplo.


const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementos_array[0] * 2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })
    resultado.innerHTML += "<br/>V.anterior:" + ant + "<br/>V.atual:" + atu + "<br/>Dobro:" + dobro
})