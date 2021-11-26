const { assert } = require("chai");

class EZArray extends Array {
    get first() {
        if (this.length !== 0)
            return this[0]
    }

    get last() {
        return this[this.length-1]
    }
}

let a = new EZArray();
//console.log(a instanceof EZArray)  // => true: instance de EZArray
//console.log(a instanceof Array)    // => true: instance de Array aussi
//console.log(a.push(1,2,3,4))       // a.length == 4; méthodes hérités
a.push(1,2,3,4)
//console.log(a.pop())               // => 4
a.pop()
//console.log(a.first)               // => 1: first getter
//console.log(a.last)                // => 3: last getter
//console.log(a[1])                  // => 2: syntaxe habituelle d'accès aux élément du tableau
//console.log(Array.isArray(a))      // => true
//console.log(EZArray.isArray(a))    // => true
assert.deepEqual(a.first, 1)
assert.deepEqual(a.last, 3)
