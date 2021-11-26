const { assert } = require("chai")

function initWith(expression) {
    return (size, nb = 0) => {
        const arr = new Array(size)
        for (let i = 0; i < size; i++) {
            arr[i] = expression(i, nb)
        }
        return arr
    }
}

const initWithZeros = initWith(() => 0)
const initFrom = initWith((i, nb) => i + nb)

//console.log(initWithZeros(3)) // [0, 0, 0]
//console.log(initFrom(3, 42)) // [42, 43, 44]

assert.deepEqual(initWithZeros(3), [0, 0, 0])
assert.deepEqual(initFrom(3, 42), [42, 43, 44])
