import { readInput, parseLines, readTestInput, sum } from '../utils/helpers';

// Main execution
const day = 3;
const input = readTestInput(day);

function part1(input: string): number {
    const lines = parseLines(input);

    let result = 0;
    for (const line of lines) {
        let maxJolts = [line[0], 0];
        for (const char of line.slice(1, line.length - 1)) {
            if (char > maxJolts[0]) {
                maxJolts[0] = char;
                maxJolts[1] = 0;
            }
            else if (char > maxJolts[1]) {
                maxJolts[1] = char;
            }
        }
        if (line[line.length - 1] > maxJolts[1]) {
            maxJolts[1] = line[line.length - 1];
        }
        result += Number(`${maxJolts[0]}${maxJolts[1]}`);
    }

    return result;
}

function part2(input: string): number {
    const lines = parseLines(input);

    let result = 0;
    for (const line of lines) {
        let maxJolts = Array(12).fill(0);
        
        result += Number(maxJolts.join(''));
    }

    return result;
}

console.log('Part 1:', part1(input)); 
console.log('Part 1:', 357);
console.log('Part 2:', part2(input));
console.log('Part 2:', 3121910778619);
