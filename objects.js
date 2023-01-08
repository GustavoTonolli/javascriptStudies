// objetos

class Carro {
    constructor(nome, tipo) {
        this.nome = nome
        if (tipo == 1) {
            this.tipo = "Esportivo"
        } else if (tipo == 2) {
            this.tipo = "Luxo"
        } else {
            this.tipo = "Utilitario"
        }
    }
    setNome(nome) {
        this.nome = nome
    }
    getNome() {
        return this.nome
    }
    info() {
        console.log(`Nome : ${this.nome}`)
        console.log(`Tipo : ${this.tipo}`)

    }
}

let c1 = new Carro("ford", 1) // new instancia uma nova classe e inicia o construtor
let c2 = new Carro("Gol", 2)
let c3 = new Carro("Fiorino", 3)
c1.setNome("BMW")
c1.info()

// criar propriedades key values


