const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth // PEGAR LARGURA DO PALCO
let alturaPalco = palco.offsetHeight // PEGAR ALTURA DO PALCO
let bolas = [];
let numBola = 0;

class Bola {
    constructor() {
        this.tam = Math.floor(Math.random() * 10); + 10 // gera tamanho aleatorio para a bolinha
        this.r = Math.floor(Math.random() * 255); // gera cor aleatoria rgb
        this.g = Math.floor(Math.random() * 255);// gera cor aleatoria rgb
        this.b = Math.floor(Math.random() * 255); // gera cor aleatoria rgb
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); // posicao aleatoria nascimento da bolinha
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); // posicao aleatoria nascimento da bolinha
    }
}
window.addEventListener("resize", (evt) => { // evento dimensionamento da tela ou palc0
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})
btn_add.addEventListener("click", (evt) => { // Instanciar novas bolinhas
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {

    }
})
btn_add.addEventListener("click", (evt) => { // Remover bolinhas
    bolas.map((b) => {

    })
})