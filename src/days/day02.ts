import { readSingleLineInput, readSingleLineTestInput } from '../utils/helpers';

// Main execution
const day = 2;
const input = readSingleLineInput(day);
const ranges = input.split(',').map(part => {
    const [start, end] = part.split('-').map(Number);
    return { start, end };
});

const repeatPatternRegexOne = /\b(\w+)\1\b/g;
const repeatPatternRegexTwo = /\b(\w+)\1(\1)*\b/g;

function part1(ranges: { start: number; end: number }[]): number {
    let sum = 0;
    for (const range of ranges) {
        for (let i = range.start; i <= range.end; i++) {
            if (repeatPatternRegexOne.test(i.toString())) {
                sum += i;
            }
        }
    }

    return sum;
}

function part2(ranges: { start: number; end: number }[]): number {
    let sum = 0;
    for (const range of ranges) {
        for (let i = range.start; i <= range.end; i++) {
            if (repeatPatternRegexTwo.test(i.toString())) {
                sum += i;
            }
        }
    }
    
    return sum;
}

console.log('Part 1:', part1(ranges));
console.log('Part 2:', part2(ranges));
