// anonymous functions

// its called in execution time, will be created when called.

/* const fun = function (...values) {
    let res = 0;
    for (v of values) {
        res += v;
    }
    return res
}
console.log(fun(19, 5, 3)) */

// constructor function

const fun = new Function("v1", "v2", "v3", "return v1+v2+v3")
console.log(fun(19, 5, 3))




