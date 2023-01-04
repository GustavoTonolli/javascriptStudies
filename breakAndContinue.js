// break and continue
// break stops the loop
// continue stop just 1 iteration

let n = 0;
let max = 1000;
let evens = 0;

/* while (n < max) {
    console.log("Gustavo - " + n)
    if (n > 10) {
        break
    }
    n++
} */

for (let i = n; i < max; i++) {
    console.log("Gustavo - " + i)
    if (i % 2 != 0) {
        continue // doesnt execute this iteration
    }
    evens++
}
console.log("Evens qty: " + evens)