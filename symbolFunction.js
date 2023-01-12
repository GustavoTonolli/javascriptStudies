// symbol 
// e uma funcao que retorna um obj do tipo symbol que tem um identificador unico
// posso utilizar quando precisar de um identificador unico para algum metodo.

const obj1 = Symbol();
const obj2 = Symbol();
const obj3 = Symbol.for("Gustavo") // metodo for permite criar um identificador no registro global
const obj4 = Symbol.for("Gustavo") // posso ter 2 simbolos com o mesmo identificador global

console.log(obj1);
console.log(Symbol.keyFor(obj4));