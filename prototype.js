// prototype serve para adicionar uma propriedade ou method a um objeto

const Nave = function (energia) {
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(100)

Nave.prototype.vidas = 3 // adiciona propriedade
Nave.prototype.disparar = function () {
    if (this.disparos > 0) {
        this.disparos--
    }
}
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(Nave)
console.log(n1)
console.log(n1.vidas)