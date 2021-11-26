const { assert } = require("chai");

/**
 * @param {Iterable} iterable Chaîne de caractère, Array, Map, Set
 * @param {function} f Fonction qui transforme chaque élément.
 */
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    let result = [];
    let next = iterator.next();
    while (!next.done) {
        result.push(f(next.value));
        next = iterator.next();
    }
    return result[Symbol.iterator]();
}

const iterator = map("hello", v => v.toUpperCase());
//console.log(iterator.next().value); // => "H"
assert.deepEqual(iterator.next().value, 'H')
//console.log(iterator.next().value); // => "E"
assert.deepEqual(iterator.next().value, 'E')
//console.log(iterator.next().value); // => "L"
assert.deepEqual(iterator.next().value, 'L')
//console.log(iterator.next().value); // => "L"
assert.deepEqual(iterator.next().value, 'L')
//console.log(iterator.next().value); // => "O"
assert.deepEqual(iterator.next().value, 'O')
//console.log(iterator.next().done); // => true
assert.deepEqual(iterator.next().done, true)