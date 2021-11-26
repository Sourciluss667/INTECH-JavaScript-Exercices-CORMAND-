const { assert } = require("chai")

function contains(haystack, needle, startIndex = 0) {
    if (startIndex > haystack.length || needle.length > haystack.length + startIndex) {
        return -1
    }

    let needleCount = 0
    let result = 0
    for (let i = startIndex; i < haystack.length; i++) {
        if (haystack[i] === needle[needleCount]) {
            if (needleCount === 0) {
                result = i
            }
            needleCount++
            if (needle.length === needleCount) {
                return result
            }
        } else if (needleCount > 0 && haystack[i] !== needle[needleCount]) {
            needleCount = 0
        }
    }

    return -1
}

//console.log(contains('Hello world!', 'world'))
//console.log(contains('Hello world!', 'Hello', 5))
//console.log(contains('Hello Hello Hello world!', 'Hello'))
//console.log(contains('Hello Hello Hello world!', 'Hello', 1))
//console.log(contains('Hello Hello Hello world!', 'Hello', 7))

assert.deepEqual(contains('Hello world!', 'world'), 6)
assert.deepEqual(contains('Hello world!', 'Hello', 5), -1)
assert.deepEqual(contains('Hello Hello Hello world!', 'Hello'), 0)
assert.deepEqual(contains('Hello Hello Hello world!', 'Hello', 1), 6)
assert.deepEqual(contains('Hello Hello Hello world!', 'Hello', 7), 12)
