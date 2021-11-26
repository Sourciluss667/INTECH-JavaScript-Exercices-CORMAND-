const { assert } = require("chai");

/**
 * @param  {...Iterable} iterables 
 */
function* zip(...iterables) {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    let nexts = iterators.map(iterator => iterator.next());
    while (!nexts.every(next => next.done)) {
        for (const next of nexts) {
            if (!next.done) {
                yield next.value;
            }
        }
        nexts = iterators.map(iterator => iterator.next());
    }
}

//console.log([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])
//console.log([...zip("abcd", "123", "+-")], ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd'])
assert.deepEqual([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])
assert.deepEqual([...zip("abcd", "123", "+-")], ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd'])