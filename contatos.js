import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos: function () {
        return contatos;
    },
    getContato: function (id) {
        return contatos[id];
    },
    addContato: function (novoContato, destinoDom) {
        contatos.push(novoContato);
        destinoDom.innerHTML = "";
        contatos.forEach(() => {
            const div = document.createElement("div");
            div.setAttribute("class", "contato");
            const p_nome = document.createElement("p");
            p_nome.innerHTML = novoContato.nome
            const p_telefone = document.createElement("p");
            p_telefone.innerHTML = novoContato.telefone
            const p_mail = document.createElement("p");
            p_mail.innerHTML = novoContato.email
            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_mail);
            destinoDom.appendChild(div);
        });

    }
}

export default contato;