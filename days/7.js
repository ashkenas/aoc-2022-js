const input = document.body.innerText.trim().split('\n');

const directories = [];

class Directory {
    constructor() {
        this.size = 0;
        this.dirs = {};
    }

    add(path, size) {
        this.size += size;
        if (path.length) {
            if (!this.dirs[path[0]])
                directories.push(this.dirs[path[0]] = new Directory());
            this.dirs[path[0]].add(path.slice(1), size);
        }
    }
};

let path = [];
const fs = new Directory();
for (const line of input) {
    if (line.startsWith('$')) {
        if (!line.startsWith('$ cd')) continue;
        const dir = line.split(' ')[2];
        if (dir === '/') path = [];
        else if (dir === '..') path = path.slice(0, path.length - 1);
        else path.push(dir);
    } else {
        const arg = line.split(' ')[0];
        if (arg === 'dir') continue;
        fs.add(path, +arg);
    }
}

const need = fs.size - 40000000;

const p1 = directories.filter(dir => dir.size <= 100000).reduce((p, c) => p + c.size, 0);
const p2 = directories.sort((a, b) => a.size - b.size).reduce((p, c) => !p && c.size > need ? c.size : p, 0);

console.log(`Advent of Code Day 7:
Part 1: ${p1}
Part 2: ${p2}`);
