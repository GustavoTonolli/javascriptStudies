// add event listener


// const c1 = document.querySelector("#c1");

/* const msg = () => {
    alert("Clicou!");
} */



/* c1.addEventListener("click", (evt) => { // with parameter we can see who shot the event
    const el = evt.target
    el.classList.add("destaque")
    console.log(evt)
}); */

const all = [...document.querySelectorAll(".curso")];

all.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(`${el.innerHTML} foi clicado!`)
    });
})