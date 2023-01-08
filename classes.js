// classes sao como um molde para um objeto que sera criado com as key values e propriedades ali listadas;
// 

class Pessoa {
    constructor(idade, nome) {
        this.idade = idade;
        this.nome = nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getNome(nome) {
        return this.nome
    }
    getIdade(idade) {
        return this.idade
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }

}

let p1 = new Pessoa(26, "Gustavo Tonolli")

p1.info()

console.log(p1.getIdade())

// como substituir a class por function para entender como funciona.

function Pessoa2(idade, nome) { // nao temos o construtor, construtor e o parametro
    this.idade = idade,
        this.nome = nome,

        this.setNome = function (nome) {
            this.nome = nome;
        },
        this.setIdade = function (idade) {
            this.idade = idade;
        },
        this.getNome = function (nome) {
            return this.nome
        },
        this.getIdade = function (idade) {
            return this.idade
        },
        this.info = () => {
            console.log(`Nome: ${this.nome}`)
            console.log(`Idade: ${this.idade}`)
        }

}

let p2 = new Pessoa2(21, "Tauani Tonolli")

p2.info()