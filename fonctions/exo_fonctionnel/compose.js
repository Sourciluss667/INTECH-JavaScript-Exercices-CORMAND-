const { assert } = require("chai")

const compose = (f, g) => (a) => f(g(a))

const increment = x => x + 1;
const double = y => y * 2;
const timesTwoPlusOne = compose(increment, double);

//console.log(timesTwoPlusOne(5)) // => 11
//console.log(timesTwoPlusOne(10)) // => 21
//console.log(timesTwoPlusOne(-3)) // => -5

assert.deepEqual(timesTwoPlusOne(5), 11)
assert.deepEqual(timesTwoPlusOne(10), 21)
assert.deepEqual(timesTwoPlusOne(-3), -5)
