const { assert } = require("chai")

function startsWith(str, start) {
    if (start.length > str) {
        return false
    }
    for (let i = 0; i < start.length; i++) {
        if (str[i] !== start[i]) {
            return false
        }
    }
    return true
}

assert.deepEqual(startsWith('Hello world!', 'Hello'), true)
assert.deepEqual(startsWith('Hello world!', 'world'), false)
assert.deepEqual(startsWith('Hello world!', 'Hell0'), false)
//console.log(`'Hello world!' start with 'Hello' : ${startsWith('Hello world!', 'Hello')}`)
//console.log(`'Hello world!' start with 'world' : ${startsWith('Hello world!', 'world')}`)
//console.log(`'Hello world!' start with 'Hell0' : ${startsWith('Hello world!', 'Hell0')}`)
