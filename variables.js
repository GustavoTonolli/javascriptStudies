/*

Váriaveis

var = escopo global, pode ser alterada e declarada novamente;
let = escopo de bloco, pode ser alterada mas não pode ser declarada novamente;
const = váriavel que não pode ser alterada, nem declarada novamente.
*/

var nome = "Gustavo Tonolli";
let idade = 26;
const pi = 3.14;

nome = "Tauani Pereira Machado Tonolli";
idade = 21;

function pessoa() {
    idade = 23;
    nome = "Tauani"; 
    let tomato = "Red" // when let is used inside a function it becomes local, and cannot be used outside de function.
    
    console.log(idade + nome + tomato);
}


console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos.");

pessoa();
