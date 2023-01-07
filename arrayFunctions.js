// array with functions;

let valores = [10, 2]

const op = [
    (val) => {
        let res = 0;
        for (v of val) {
            res += v;
        }
        return res
    },
    (val) => {
        let res = 1;
        for (v of val) {
            res *= v
        }
        return res
    },
];
console.log(op[2](valores))