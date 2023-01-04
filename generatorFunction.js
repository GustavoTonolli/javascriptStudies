// genarator function

// has its return delayed until we need the return

// add * to function

/* function* colors() {
    yield 'Red'
    yield 'Green'
    yield 'Blue'
}
const itr = colors()
console.log(itr.next().value)
console.log(itr.next().value) */

/* function* questions() {
    const name = yield "What's your name?"
    const sport = yield 'Which is your favorite sport?'

    return "Your name is " + name + ", and your favorite sport is " + sport;
}

const itr = questions()

console.log(itr.next().value)
console.log(itr.next("Gustavo Tonolli").value)
console.log(itr.next("snowboard").value) */

function* count() { //had an ideia to generate ids
    let i = 0;
    while (true) {
        yield i++;
    }
}

const itr = count();
for (i = 0; i <= 10; i++) {
    console.log(itr.next().value);
};