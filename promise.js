// Promise em JavaScript. what is it?

// promise veio para resolver problema do javascript assincrono
// quando executa uma promise ela gera uma promessa
// o javascript pode continuar executando, e a promisse pode retornar depois, vai entregar quando tiver pronto, e aplicacao pode continuar a trabalhar
// isso seria o conceito assincrono

const numero = document.getElementById("numero");


let promise = new Promise((res, rej) => {
    let resultado = true;
    let tempo = 3000;
    setTimeout(() => {
        if (resultado) {
            res("Deu tudo certo")
        } else {
            rej("Deu tudo errado")
        }
    }, tempo)
});
promise.then((r) => {
    numero.innerHTML = r
    numero.classList.remove("erro")
    numero.classList.add("ok")
})
promise.catch((r) => {
    numero.innerHTML = r
    numero.classList.add("erro")
    numero.classList.remove("ok")
})


numero.innerHTML = "Processando..."

/* setTimeout(() => {
    resultado = true
}, tempo)

if (resultado) {
    numero.innerHTML = "Deu tudo certo"
    numero.classList.remove("erro")
    numero.classList.add("ok")
} else {
    numero.innerHTML = "Deu tudo errado"
    numero.classList.add("erro")
    numero.classList.remove("ok")
} */

