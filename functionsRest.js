// function with rest parameters
// function without a determined amount of values

function sum(...values) {
    let length = values.length;
    let res = 0;
    for (v of values)
        res += v;
    return res
}

console.log(sum(10, 5, 3))