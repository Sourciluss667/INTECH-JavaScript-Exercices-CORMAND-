const { assert } = require("chai");

function* hanoi(nbdisk, from, to) {
    if (nbdisk !== 0) {
        yield* hanoi(nbdisk - 1, from, 6 - from - to)
        //console.log(`${from} -> ${to}`)
        yield {f: from, t: to}
        yield* hanoi(nbdisk - 1, 6 - from - to, to)
    }
}

const steps = [];
for (let step of hanoi(3, 1, 3)) {
    steps.push(step);
}

assert.deepEqual(steps, [
    { f: 1, t: 3 }, { f: 1, t: 2 }, { f: 3, t: 2 },
    { f: 1, t: 3 }, { f: 2, t: 1 }, { f: 2, t: 3 },
    { f: 1, t: 3 }
]);