const input = document.body.innerText.trim().split('\n');

const [p1, p2] = input.map(l => l.split(' ')).reduce((p, c) => {
    let m = c[1].codePointAt(0) - 87;
    const t = c[0].codePointAt(0) - 64;
    return [
        p[0] + m + (m == t ? 3 : (m == t % 3 + 1 ? 6 : 0)),
        p[1] + (--m * 3) + (!m ? (t + 1) % 3 + 1 : (m == 1 ? t : t % 3 + 1))
    ];
}, [0, 0]);

console.log(`Advent of Code Day 2:
Part 1: ${p1}
Part 2: ${p2}`);
