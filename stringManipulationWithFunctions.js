// manipulando obj strings com funcoes

let nome = new String("Gustavo Tonolli");  // objts
let nom1e = new String("Gustavo");


console.log(typeof (nome));

console.log(nome.charAt(1));
console.log(nome.charCodeAt(1));
console.log(nome.indexOf("G")) // primeiro caractere encontrado
console.log(nome.lastIndexOf("o")) // ultimo caractere encontrado

console.log(nome.localeCompare(nom1e)); // comparar strings, 0 = strings iguais, 1 = strings diferentes 1 string maior, -1 = 2 string maior'

// console.log(nome.replace("G", "A")); // substituir caracteres G pelo A, so substitui o primeiro encontrado
console.log(nome.search("Tonolli"))
console.log(nome.slice(8, 15)) // retorna os caracteres da posicao 8 ate 15
arr = nome.split(" "); // faz um recorte na string onde for indicado e retorna um array com cada parte repartida
console.log(arr);
console.log(arr.length);    