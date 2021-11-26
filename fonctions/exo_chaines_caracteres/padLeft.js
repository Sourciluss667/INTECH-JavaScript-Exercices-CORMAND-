const { assert } = require("chai")

function padLeft(char, str, quantity) {
    if (str.length >= quantity) {
        return str
    }
    return char.repeat(quantity - str.length) + str
}

const padZeros = (str, quantity) => padLeft('0', str, quantity)
const padSpaces = (str, quantity) => padLeft(' ', str, quantity)

assert.deepEqual(padLeft('*', '0753', 10), '******0753')
assert.deepEqual(padLeft('0', '1', 4), '0001')
assert.deepEqual(padZeros('lleh', 10), '000000lleh')
assert.deepEqual(padSpaces(': lot of spaces', 50), '                                   : lot of spaces')
