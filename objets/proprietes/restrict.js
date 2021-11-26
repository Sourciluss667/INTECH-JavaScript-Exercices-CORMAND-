const { assert } = require("chai");

function restrict (target, keep) {
    let result = {}

    for (const [key, value] of Object.entries(target)) {
        if (key in keep) {
            result[key] = value
        }
    }

    return result
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
//console.log("vars" in tooMuchConfig); // => true
//console.log("env" in tooMuchConfig); // => true

assert.deepEqual("vars" in tooMuchConfig, true)
assert.deepEqual("env" in tooMuchConfig, true)

const properConfig = restrict(tooMuchConfig, config);
//console.log(properConfig === config); // => false
//console.log("vars" in properConfig); // => false
//console.log("env" in properConfig); // => false

assert.deepEqual(properConfig === config, false)
assert.deepEqual("vars" in properConfig, false)
assert.deepEqual("env" in properConfig, false)
assert.deepEqual("user" in properConfig, true)
assert.deepEqual("pass" in properConfig, true)
