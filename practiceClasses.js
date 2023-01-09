const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const carros = document.querySelector(".carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")


let arrCarros = [];

f_tipoMilitar.addEventListener("click", (evt) => {
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click", (evt) => {
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const gerenciar = () => {
    carros.innerHTML = ""
    arrCarros.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome : ${c.nome}<br/>`
        div.innerHTML += `Portas : ${c.portas}<br/>`
        div.innerHTML += `Blindagem : ${c.blindagem}<br/>`
        div.innerHTML += `Municao : ${c.municao}`
        carros.appendChild(div)

    });

}
btn_addCarro.addEventListener("click", () => {
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        arrCarros.push(c)
    } else {

        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arrCarros.push(c)
    }
    gerenciar()
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0;
    f_municao.value = 0;

})


class Carro { // classe pai / classe BASE
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;

    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    setCor(cor) {
        this.cor = cor
    }
}

class Militar extends Carro { // Classe militar herda a classe carro. ou seja O carro militar tem todos as propriedades de Carro mais as suas proprias propriedades.
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas) // parametros que vao para o objeto pai.
        this.blindagem = blindagem;
        this.municao = municao;
    }
    atirar() {
        if (this.municao > 0) {
            this.municao--
        }
    }

}

const c2 = new Militar("Atirador", 8, 100, 50)

const c1 = new Carro("Gol", 4);
c1.setCor("Azul");
c1.ligar()
console.log(c2)