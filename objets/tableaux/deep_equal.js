const { assert } = require("chai")

/**
 * Deep comparison between array
 * @param {Array} a1 
 * @param {Array} a2 
 */
function deepEqual(a1, a2) {
    if (a1.length != a2.length) return false;

    for (let i = 0; i < a1.length; i++) {
        if (typeof a1[i] === 'object') {
            if (typeof a2[i] !== 'object') return false;
            if (!(deepEqual(a1[i], a2[i]))) return false;
        }
        else if (a1[i] !== a2[i]) return false;
    }
    return true;
}

const a1 = [1, 2, [3, 4], 5]
const a2 = JSON.parse(JSON.stringify(a1)) // Deep copy
//console.log(a1 === a2) // => false
//console.log(deepEqual(a1, a2)) // => true

const a3 = [1, 2, [3, 3], 5]

assert.deepEqual(a1 === a2, false)
assert.deepEqual(deepEqual(a1, a2), true)
assert.deepEqual(a1 === a3, false)
assert.deepEqual(deepEqual(a1, a3), false)