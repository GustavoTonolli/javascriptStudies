// Objetos Literais - Objeto unico referenciado na memoria, todos apontam ao mesmo objeto.

const Pessoa = {
    nome: "Gustavo",
    setNome: function (nome) {
        this.nome = nome;
    },
    getNome: function () {
        return this.nome
    }
}

console.log(Pessoa.nome)

const p1 = Pessoa
const p2 = Pessoa
const p3 = Pessoa
p1.nome = "Tonolli" // todos os objetos recebem o mesmo nome.

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(Pessoa.nome)