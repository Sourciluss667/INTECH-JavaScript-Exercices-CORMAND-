const { assert, expect } = require("chai")

class RangeExo {
    #from;
    #to;

    // Initialise l'objet
    constructor(from, to) {
        if (from > to) throw new Error('from > to, not good!')
        this.#from = from
        this.#to = to
    }

    // Dit si `x` tombe dans l'interval [from; to]
    includes(x) {
        return x <= this.#to && x >= this.#from
    }

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString() {
        return `(${this.#from}...${this.#to})`
    }

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s) {
        if (!s.match(this.integerRangePattern)) throw new Error('Don\'t match range pattern!')

        const strSplit = s.split('...')
        return new RangeExo(strSplit[0].replace('(', '').valueOf(), strSplit[1].replace(')', '').valueOf())
    }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern = /\(\d*...\d*\)/
}

class Span extends RangeExo {
    constructor(start, extend) {
        let from, to;
        if (extend < 0) {
            from = start + extend
            to = start
        } else {
            from = start
            to = start + extend
        }
        super(from, to)
    }
}

// Range
const r = new RangeExo(1, 10)
assert.throw(() => new RangeExo(10, 1))
assert.deepEqual(r.includes(5), true)
assert.deepEqual(r.includes(10), true)
assert.deepEqual(r.includes(12), false)
assert.deepEqual(r.toString(), '(1...10)')
assert.deepEqual(RangeExo.parse('(1...10)'), r)
assert.throw(() => RangeExo.parse('bullshit'))
// Span
assert.deepEqual((new Span(2, 4)).toString(), '(2...6)')
assert.deepEqual((new Span(12, -8)).toString(), '(4...12)')
