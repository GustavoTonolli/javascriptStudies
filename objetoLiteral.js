// objetos literais

let computador = {
    cpu: "i9"
}
computador.placaVideo = "Nvidia"

console.log(computador)

// clonar objetos

c1 = Object.assign(computador)
console.log(c1)

c2 = Object.create(computador) // cria um objeto do tipo computador