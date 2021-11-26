const { assert } = require("chai")

function split(str, sep) {
    const result = []
    let lastFound = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            if (str[i+1] === undefined || str[i+1] === sep) {
                result.push('')
                lastFound = i
            } else {
                result.push(str.substring(lastFound, i))
                lastFound = ++i
            }
        }
    }

    const lastSub = str.substring(lastFound)
    result.push(lastSub === sep ? '' : lastSub)
    return result
}

assert.deepEqual(split("hello,world,comment,vas,tu", ","), ['hello', 'world', 'comment', 'vas', 'tu'], 'Fail to split correctly!')
assert.deepEqual(split("hello world comment vas tu", " "), ['hello', 'world', 'comment', 'vas', 'tu'], 'Fail to split correctly!')
assert.deepEqual(split("Salut le monde!", " "), ['Salut', 'le', 'monde!'], 'Fail to split correctly!')
assert.deepEqual(split(",,,,", ","), ['', '', '', '', ''], 'Fail to split correctly!')
