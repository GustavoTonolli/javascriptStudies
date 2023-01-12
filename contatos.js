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
        contatos.forEach((c) => {
            const div = document.createElement("div");
            div.setAttribute("class", "contato");
            const p_nome = document.createElement("p");
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p");
            p_telefone.innerHTML = c.telefone
            const p_mail = document.createElement("p");
            p_mail.innerHTML = c.email
            let btn_remover = document.createElement("button");
            btn_remover.innerHTML = "Remover";
            btn_remover.setAttribute("class", "remover");
            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_mail);
            div.appendChild(btn_remover);
            destinoDom.appendChild(div);
            btn_remover.addEventListener('click', (evt) => {
                // console.log(evt.target.parentNode.innerHTML)
                contatos.splice(evt.target.parentNode.innerHTML, 1);

                evt.target.parentNode.remove();
                console.log(contatos)
            })
        });
    },



}

export default contato;