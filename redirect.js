const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", () => {
    // window.location = "https://google.com"
    // window.location.replace("https://google.com") // remove a url anterior do historico
    // window.location.assign("https://google.com") // nao remove a url anterior do historico
    // window.location.reload() // recarrega a pagina 
    // window.history.back(); // volta no historico
    // window.history.forward(); // avanca a pagina
    console.log(window.history.length); // imprime o tamanho do historico
    // window.history.go(1) // navega para a proxima pagina do historico
    window.location = url.value

})