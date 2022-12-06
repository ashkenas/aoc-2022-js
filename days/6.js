const input = document.body.innerText.trim();

let p1;
let p2;

for (let i = 0; i < input.length - 3; i++) {
    const letters = new Map();
    const letters2 = new Map();
    for (let j = i; j < Math.min(i + 14, input.length); j++) {
        if (j < i + 4) letters.set(input[j], true);
        letters2.set(input[j], true);
    }
    if (!p1 && letters.size === 4)
        p1 = i + 4;
    if (!p2 && letters2.size === 14)
        p2 = i + 14;
}

console.log(`Advent of Code Day 6:
Part 1: ${p1}
Part 2: ${p2}`);
