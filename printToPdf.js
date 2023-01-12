// imprimir ou criar pdf

// botao imprimir, adicionar event listener, e utilizar window.open, para abrir uma nova janela
//exemplo:

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const conteudo = document.getElementById('tabela').innerHTML;
    let style = "<style>"
    style += "html,body{margin:0;padding:0;}"
    style += "body{background-color:#fff;}"
    style += "</style>"
    const win = window.open('', '', "height=700, width=700");

    win.document.write("<html><head><title>");
    win.document.write(style);
    win.document.write(conteudo);
    win.document.write("</title>");
    win.document.write("</hmtl>");

    win.print();
    win.close();
})