// how to stop propagation event.

const caixa1 = document.querySelector("#caixa1");

caixa1.addEventListener("click", () => { // when I do this, everything that I click thats inside the caixa1 div will count...its propagating the event to the elements inside.
    console.log("clicou");
});

//how to resolve

const c1 = [...document.querySelectorAll(".c1")];

c1.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation();
    });
});

