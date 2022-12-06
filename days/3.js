const input = document.body.innerText.trim().split('\n');

let p1 = 0;
let p2 = 0;
for (let i = 0; i < input.length; i++) {
    const f = input[i].substring(0, input[i].length / 2);
    const s = input[i].substring(input[i].length / 2);
    for (const c of f) {
        if (s.includes(c)) {
            p1 += c.charCodeAt(0) - (/[a-z]/.test(c) ? 96 : 38);
            break;
        }
    }
    if (!(i % 3)) {
        for (const c of input[i]) {
            if (input[i + 1].includes(c) && input[i + 2].includes(c)) {
                p2 += c.charCodeAt(0) - (/[a-z]/.test(c) ? 96 : 38);
                break;
            }
        }
    }
}

console.log(`Advent of Code Day 3:
Part 1: ${p1}
Part 2: ${p2}`);
