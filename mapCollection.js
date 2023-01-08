// colecao map, e uma colecao do tipo chave, valor.


// const caixa = document.querySelector("#caixa");

let mapa = new Map(); //cria uma colecao map
mapa.set("curso", "JavaScript"); // adiciona ou altera a colecao, com chave e elemento. chave sempre precisa ser diferente;
mapa.set(10, "HTML");
mapa.set(10, 2);
mapa.forEach(() => { }); // percorre todos os elementos da colecao
mapa.clear() // limpa todos os itens da colecao
mapa.delete() // deleta um item da colecao
mapa.get() // obtem um item da colecao
mapa.has() // verifica se existe um item na colecao e retorna true or false.
mapa.values() // retorna os valores de uma colecao
mapa.size() // retorna o tamanho de uma colecao
mapa.keys()// retorna as chaves de uma colecao.

console.log(mapa)
console.log(mapa.get("curso"))

if (mapa.has("curso")) {
    return true
} else return false
