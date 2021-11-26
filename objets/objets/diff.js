const { assert } = require("chai");

/**
 * Return object without propertyNames
 * @param {object} source 
 * @param {object} propertyNames 
 * @returns {object}
 */
function diff(source, propertyNames) {
    let sourceCopy = {...source};
    for (let key of Object.keys(propertyNames)) {
        if (sourceCopy.hasOwnProperty(key)) {
            delete sourceCopy[key];
        }
    }
    return sourceCopy;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
//console.log(objectWithoutOpacity);
//console.log(o1 === objectWithoutOpacity); // => false

assert.deepEqual(o1 === objectWithoutOpacity, false);
