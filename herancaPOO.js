// heranca objetos

class Carro { // classe pai / classe BASE
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
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