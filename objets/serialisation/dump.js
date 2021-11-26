const { assert } = require("chai")

/**
 * Serialize object in string
 * @param {object} obj 
 * @returns {string}
 */
function dump(obj) {
    let result = '{'
    for (const [key, value] of Object.entries(obj)) {
        let line = `${key}:`
        if (typeof value === 'string') {
            line += `"${value}"`
        } else if (typeof value === 'object') {
            // Array or object
            if (Array.isArray(value)) {
                line += `[${value}]`
            } else {
                line += dump(value)
            }
        } else {
            line += value
        }
        line += ','
        result += line
    }
    result = result.slice(0, -1)
    result += '}'
    return result
}

let obj = {}
obj.firstname = "Alan"
obj.lastname = "Turing"
obj.birthday = [1921, 6, 23]
//console.log(dump(obj)) // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}
assert.deepEqual(dump(obj), '{firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}')

obj.object1 = {value: 1, str: 'hello'}
//console.log(dump(obj)) // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23],object1:{value:1,str:"hello"}}
assert.deepEqual(dump(obj), '{firstname:"Alan",lastname:"Turing",birthday:[1921,6,23],object1:{value:1,str:"hello"}}')
