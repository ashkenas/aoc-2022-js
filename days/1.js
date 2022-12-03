const input = document.body.innerText.split('\n\n');

const sorted = input.map(s => s.split('\n').reduce((p, c) => p + (+c), 0)).sort((a, b) => b - a);

const p1 = sorted[0];
const p2 = p1 + sorted[1] + sorted[2];

console.log(`Advent of Code Day 1:
Part 1: ${p1}
Part 2: ${p2}`);
