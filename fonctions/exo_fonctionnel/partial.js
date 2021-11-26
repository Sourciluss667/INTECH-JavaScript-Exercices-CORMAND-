const { assert } = require("chai");

const partial = (f, ...args) => (...innerArgs) => f(...args, ...innerArgs);

const f = (x, y, z) => x * (y - z);
//console.log(partial(f, 2)(3, 4)) // => -2   <=> (2 * (3 - 4))
//console.log(partial(f, 5, 6)(2)) // => 20   <=> (5 * (6 - 2))
//console.log(partial(f, 1)(2, 2)) // => 0    <=> (1 * (2 - 2))

assert.deepEqual(partial(f, 2)(3, 4), -2)
assert.deepEqual(partial(f, 5, 6)(2), 20)
assert.deepEqual(partial(f, 1)(2, 2), 0)
