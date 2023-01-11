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
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 10) + 10; // gera tamanho aleatorio para a bolinha
        this.r = Math.floor(Math.random() * 255); // gera cor aleatoria rgb
        this.g = Math.floor(Math.random() * 255);// gera cor aleatoria rgb
        this.b = Math.floor(Math.random() * 255); // gera cor aleatoria rgb
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); // posicao aleatoria nascimento da bolinha
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); // posicao aleatoria nascimento da bolinha
        this.velx = Math.floor(Math.random() * 2) + 0.5; // velocidade aleatoria
        this.vely = Math.floor(Math.random() * 2) + 0.5; // velocidade aleatoria
        this.dirx = (Math.random() * 10) < 5 ? 1 : -1;
        this.diry = (Math.random() * 10) < 5 ? 1 : -1;
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() + "_" + Math.random() * 9999999999999999999;
        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);
        numBola++;
        num_objetos.innerHTML = numBola;
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }
    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => {
            if (b.id != this.id)
                return b;
        });
        this.eu.remove();
        numBola--
        num_objetos.innerHTML = numBola;
    }
    desenhar = () => {
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'bola');
        div.setAttribute("style", `left : ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        this.palco.appendChild(div);
    }
    controle_bordas = () => {
        if (this.px + this.tam >= larguraPalco) {
            this.dirx = -1
        } else if (this.px <= 0) {
            this.dirx = 1
        }
        if (this.py + this.tam >= alturaPalco) {
            this.diry = -1
        } else if (this.py <= 0) {
            this.diry = 1
        }
    }
    controlar = () => {
        this.controle_bordas()
        this.px += this.dirx * this.velx;
        this.py += this.diry * this.vely;
        this.eu.setAttribute("style", `left : ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        if ((this.px > larguraPalco) || (this.py > alturaPalco)) {
            this.remover()
        }
    }
}
window.addEventListener("resize", (evt) => { // evento dimensionamento da tela ou palc0
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})
btn_add.addEventListener("click", (evt) => { // Instanciar novas bolinhas
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco))
    }
})
btn_remover.addEventListener("click", (evt) => { // Remover bolinhas
    txt_qtde.value = 0
    bolas.map((b) => {
        b.remover();
    })

})