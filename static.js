// static POO em javascript
// static cria metodo ou atributo
// com static consigo invocar sem instanciar uma classe ou seja com static o metodo faz parte da classe e nao do construtor

class Npc {
    static alerta = false // para todos os objetos
    constructor(energia) {
        this.energia = energia

    }
    info() {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta ? "Sim" : "Nao"}`)
        console.log("-----------------------------------------")
    }
    static alertar = function () {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(50)
const npc3 = new Npc(120)

npc1.alerta = false
Npc.alerta = true // mudando o alerta em todos os objetos
Npc.alertar()
npc1.info()
npc2.info()
npc3.info()