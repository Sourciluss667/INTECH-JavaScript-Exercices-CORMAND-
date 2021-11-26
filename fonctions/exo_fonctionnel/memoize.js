const { assert } = require("chai");

function fibonacci(n) { 
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function memoize(f) {
    let cache = {}
    return (x) => {
        if (cache[x] != undefined) return cache[x]
        return cache[x] = f(x)
    }
}

//console.log(fibonacci(5)) // 5
//console.log(fibonacci(6)) // 8
//const t1 = new Date().valueOf()
//console.log(fibonacci(40)) // 102334155 (prend du temps)
//console.log((new Date().valueOf() - t1) + 'ms')

assert.deepEqual(fibonacci(5), 5)
assert.deepEqual(fibonacci(6), 8)
const t1 = new Date().valueOf()
assert.deepEqual(fibonacci(40), 102334155)
const timeFib = new Date().valueOf() - t1
assert.deepEqual(timeFib > 0, true)

const memFib = memoize(
    (n) => {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1; 
        } else {
            return memFib(n - 1) + memFib(n - 2);
        }
    }
)

//console.log(memFib(5)) // 5
//console.log(memFib(6)) // 8
//const t2 = new Date().valueOf()
//console.log(memFib(40)) // 102334155 (prend du temps)
//console.log((new Date().valueOf() - t2) + 'ms')

assert.deepEqual(memFib(5), 5)
assert.deepEqual(memFib(6), 8)
const t2 = new Date().valueOf()
assert.deepEqual(memFib(40), 102334155)
const timeMemFib = new Date().valueOf() - t2
assert.deepEqual(timeMemFib < timeFib, true)
