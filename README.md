# Advent of Code 2025 - TypeScript Setup

Solutions for [Advent of Code 2025](https://adventofcode.com/2025) written in TypeScript. Thanks Claude for a simple setup. I'll do the programming myself.

## Setup

1. Install dependencies:
```bash
npm install
```

## Project Structure

```
├── src/
│   ├── days/          # Daily puzzle solutions
│   │   └── day01.ts   # Template for each day
│   ├── inputs/        # Puzzle inputs
│   │   └── day01.txt
│   └── utils/         # Helper functions
│       └── helpers.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Running Solutions

### Using ts-node (recommended for development)
```bash
# Run a specific day
npx ts-node src/days/day01.ts
```

### Using compiled JavaScript
```bash
# Build the project
npm run build

# Run compiled code
node dist/days/day01.js
```

### Watch mode
```bash
npm run watch
```

## Creating a New Day

1. Copy the template from `src/days/day01.ts` to `src/days/dayXX.ts`
2. Create your input file at `src/inputs/dayXX.txt`
3. Implement `part1()` and `part2()` functions
4. Run with `npx ts-node src/days/dayXX.ts`

## Utility Functions

The `src/utils/helpers.ts` file includes common utilities:
- `readInput(day)` - Read input file for a day
- `parseLines(input)` - Split input into lines
- `parseNumbers(input)` - Parse input as number array
- `parseGrid(input)` - Parse input as 2D grid
- `sum(numbers)` - Sum array of numbers
- `product(numbers)` - Product of numbers
- `gcd(a, b)` - Greatest common divisor
- `lcm(a, b)` - Least common multiple
- `range(start, end)` - Generate range of numbers
