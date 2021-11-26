const { assert } = require("chai")

function padRight(char, str, quantity) {
    if (str.length >= quantity) {
        return str
    }
    return str + char.repeat(quantity - str.length)
}

const padZeros = (str, quantity) => padRight('0', str, quantity)
const padSpaces = (str, quantity) => padRight(' ', str, quantity)

assert.deepEqual(padRight('*', '0753', 10), '0753******')
assert.deepEqual(padRight('0', '1', 4), '1000')
assert.deepEqual(padZeros('hell', 10), 'hell000000')
assert.deepEqual(padSpaces('lot of spaces :', 50), 'lot of spaces :                                   ')
