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

// funcao substring retorna tambem uma parte da string, indico o inicio e o fim, porem e sempre 1 a mais, (de, Ate)

let parte = nome.substring(8, 15) // retorna sombre ome de ate
console.log(parte);

let parte2 = nome.substr(8, 7) // retorna sobrenome de 7 caracteres

console.log(nome.toUpperCase()); //retorna nome em maiusculo
console.log(nome.toLowerCase()); //retorna nome em minusculo
console.log(nome.toLocaleLowerCase()); //retorna nome em minusculo
console.log(nome.toLocaleUpperCase()); //retorna nome em maiusculo
console.log(nome.valueOf()); // retorna valor primitivo string
let num = 15
num = num.toString()
console.log(typeof (num))
console.log(num)

// novos metodos string es6

// let nome3 = new String("Gustavo Tonolli")
// console.log(nome3.startsWithout("G")) // a string comeca com G? true, false
// console.log(nome3.endsWithout("Tonolli")) // a string termina com Tonolli? true, false
// console.log(nome3.includes("To")) // a string contem Tonolli? true, false

// console.log(nome3.repeat(2)) // duplica string
console.log(String.fromCodePoint(66)) // code ASCII to string
