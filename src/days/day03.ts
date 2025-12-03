import { readInput, parseLines, readTestInput } from '../utils/helpers';

// Main execution
const day = 3;
const input = readTestInput(day);

function part1(input: string): number {
    const lines = parseLines(input);

    let sum = 0;
    for (const line of lines) {
        let maxJolts = [line[0], line[1]].sort();
        for (const char of line.slice(2)) {
            if (char > maxJolts[0]) {
                maxJolts[0] = char;
                maxJolts.sort();
            }
        }
        sum += Number(maxJolts[0]) + Number(maxJolts[1]);
    }

    return sum;
}

function part2(input: string): number {
    const lines = parseLines(input);

    return 0;
}

console.log('Part 1:', part1(input));
console.log('Part 1:', 357);
console.log('Part 2:', part2(input));
