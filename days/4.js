const input = document.body.innerText.trim().split('\n')
                .map(l => l.split(',').map(r => r.split('-').map(n => +n)));

let p1 = 0;
let p2 = 0;
input.forEach(([[a, b], [c, d]]) => {
    if (a < c ? d <= b : (a > c ? b <=d : b <= d || d <= b)) p1++;
    if (b < d ? b >= c : d >= a) p2++;
});

console.log(`Advent of Code Day 4:
Part 1: ${p1}
Part 2: ${p2}`);
