const input = document.body.innerText.trim().split('\n').filter(l => l);

let cols;
for (const line of input) {
    if (line[1] === '1') {
        cols = line.split(' ').filter(e => e).map(() => [[],[]]);
        break;
    }
}

let setup = true;
for (const line of input) {
    if (setup) {
        if (line[1] === '1') {
            setup = false;
        } else {
            for (let i = 1; i < line.length; i += 4) {
                if (line[i] !== ' ') {
                    cols[Math.floor(i / 4)][0].push(line[i]);
                    cols[Math.floor(i / 4)][1].push(line[i]);
                }
            }
        }
    } else {
        const [a, f, t] = /move (\d*) from (\d*) to (\d*)/.exec(line).slice(1).map(n => +n);
        cols[t - 1][0] = [...cols[f - 1][0].slice(0, a).reverse(), ...cols[t - 1][0]];
        cols[f - 1][0] = cols[f - 1][0].slice(a);
        cols[t - 1][1] = [...cols[f - 1][1].slice(0, a), ...cols[t - 1][1]];
        cols[f - 1][1] = cols[f - 1][1].slice(a);
    }
}

const p1 = cols.reduce((p, c) => p + c[0][0], '');
const p2 = cols.reduce((p, c) => p + c[1][0], '');

console.log(`Advent of Code Day 5:
Part 1: ${p1}
Part 2: ${p2}`);
