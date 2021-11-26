// 3 tours au total : 1, 2, 3
function hanoiFirstVersion(nbDiscs, start, end, mid = -1) {
    // Calculate mid only at first call
    if (mid === -1) {
        console.log(`Hanoi resolution with ${nbDiscs} discs, start = ${start} and end = ${end} !`)
        if (start == 1 && end == 2 || start == 2 && end == 1) {
            mid = 3
        } else {
            mid = Math.abs(end - start)
        }
    }

    if (nbDiscs !== 0) {
        hanoi(nbDiscs - 1, start, mid, end)
        console.log(`${start} -> ${end}`)
        hanoi(nbDiscs - 1, mid, end, start)
    }
}

function hanoi(nbdisk, from, to) {
    if (nbdisk !== 0) {
        hanoi(nbdisk - 1, from, 6 - from - to)
        console.log(`${from} -> ${to}`)
        hanoi(nbdisk - 1, 6 - from - to, to)
    }
}

// Relou de faire des tests avec des console.log :/
hanoi(3, 1, 3)
// hanoi(3, 2, 3)
// hanoi(3, 3, 1)
// hanoi(3, 3, 2)
// hanoi(3, 1, 2)
// hanoi(3, 2, 1)