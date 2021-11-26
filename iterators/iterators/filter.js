const { assert } = require("chai");

/**
 * @param {Iterable} iterable Chaîne de caractère, Array, Map, Set
 * @param {function} f Fonction qui transforme chaque élément.
 */
function filter(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    let result = [];
    let next = iterator.next();
    while (!next.done) {
        if (f(next.value)) {
            result.push(next.value);
        }
        next = iterator.next();
    }
    return result[Symbol.iterator]();
}

const iterator = filter("hello", v => "aeiouy".includes(v));
//console.log(iterator.next().value); // => "e"
assert.deepEqual(iterator.next().value, 'e');
//console.log(iterator.next().value); // => "o"
assert.deepEqual(iterator.next().value, 'o')
//console.log(iterator.next().done); // => true
assert.deepEqual(iterator.next().done, true)
