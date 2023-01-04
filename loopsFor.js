// loops or repetition structures
// it will execute a block, or line of code, or function in each loop.

// defined loops - when I know how many times I will need to iterate - Loop FOR
// undefined loops - when I don't know how many times I will need to iterate - While and Do While

// for(contador;condicional;controle/incremento/decremento){commands}

/* console.log("Beggining of the program!")
for (let i = 0; i < 10; i++) {
    console.log("Looping!")
}
console.log("End of the program!") */

console.log("Beggining of the program!")
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i + " Even!")
    } else {
        console.log(i + " Odd!")
    }
}
console.log("End of the program!")

