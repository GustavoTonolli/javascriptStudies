// Polimorfismo POO
// quando se tem a capacidade de um mesmo metodo ter acoes diferentes
// dois metodos iguais com funcionalidades diferentes
// posso ter varios construtores com propriedades diferentes

// abstract nao pode ser instanciada
class CarroPadrao { // clase abstrata, classe so para base.. nao quero criar objetos dessa classe
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe nao Pode ser Instanciada")
        }
        if (this.ligar === undefined) { // obrigando a implementar metodo
            throw new TypeError("Necessario implementar o metodo ligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }

}
class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "Normal"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "Esportivo"
        } else if (tipo == 3) {
            this.velMax = 160
            this.nome = "Super Esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log("-------------")
    }
    ligar() {
        this.ligado = true
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 100
        }
        else if (e == 2) {
            this.pot = 150
        }
        else if (e == 3) {
            this.pot = 150
        }

    }
}
class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo) // super precisa ser a primeira linha
        this.tipoInfo = 0
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro especial"
    }
    info() { // sobrescreveu o metodo do pai
        if (this.tipoInfo == 0) {
            super.info()
        } else {
            console.log(this.nome)
        }
        // PARA CHAMAR O METODO PAI porem posso mudar o methodo e chamar com o mesmo nome
    }

}
const c1 = new Carro(1, 0)
const c2 = new Carro(3, 3)
const c3 = new CarroEspecial(3)
c1.info()
c2.info()
c3.info()
// const c9 = new CarroPadrao()