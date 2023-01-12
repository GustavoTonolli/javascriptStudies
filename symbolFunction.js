// symbol 
// e uma funcao que retorna um obj do tipo symbol que tem um identificador unico
// posso utilizar quando precisar de um identificador unico para algum metodo.

/* const obj1 = Symbol();
const obj2 = Symbol();
const obj3 = Symbol.for("Gustavo") // metodo for permite criar um identificador no registro global
const obj4 = Symbol.for("Gustavo") // posso ter 2 simbolos com o mesmo identificador global

console.log(obj1);
console.log(Symbol.keyFor(obj4)); */

class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol()
    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j5")];
let s1 = jogadores[0].id;

jogadores = jogadores.filter((j) => {
    return j.id !== s1;
})

console.log(jogadores)
console.log(s1)