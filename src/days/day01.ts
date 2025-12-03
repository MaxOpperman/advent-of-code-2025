import { readInput, parseLines, modulo, readTestInput } from '../utils/helpers';

// Main execution
const day = 1;
const input = readInput(day);

function part1(input: string): number {
    const lines = parseLines(input);

    let dail = 50;
    let result = 0;

    for (const line of lines) {
        const action = line.charAt(0);
        const value = parseInt(line.slice(1), 10);
        if (action === 'L') {
            dail -= value;
        } else if (action === 'R') {
            dail += value;
        }
        dail = modulo(dail, 100);
        result += Number(dail === 0);
    }

    return result;
}

function part2(input: string): number {
    const lines = parseLines(input);

    let dail = 50;
    let result = 0;

    for (const line of lines) {
        const action = line.charAt(0);
        const value = parseInt(line.slice(1), 10);
        result += Math.floor(value / 100);
        const change = modulo(value, 100);
        const before = dail;
        if (action === 'L') {
            dail -= change;
            if (before > 0 && dail < 0) {
                result += 1;
            }
        } else if (action === 'R') {
            dail += change;
            if (before <= 99 && dail > 100) {
                result += 1;
            }
        }
        dail = modulo(dail, 100);
        result += Number(dail === 0);
    }

    return result;
}

console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
