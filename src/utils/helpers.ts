import * as fs from 'fs';
import * as path from 'path';

/**
 * Read input file for a specific day
 */
export function readInput(day: number): string {
  const filePath = path.join(__dirname, `../inputs/day${day.toString().padStart(2, '0')}.txt`);
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Read test input file for a specific day
 */
export function readTestInput(day: number): string {
  const filePath = path.join(__dirname, `../inputs_test/day${day.toString().padStart(2, '0')}.txt`);
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Parse input into lines
 */
export function parseLines(input: string): string[] {
  return input.trim().split('\n');
}

/**
 * Read single line input
 */
export function readSingleLineInput(day: number): string {
  const input = readInput(day);
  return parseLines(input)[0];
}

/**
 * Read single line input for test data
 */
export function readSingleLineTestInput(day: number): string {
  const input = readTestInput(day);
  return parseLines(input)[0];
}

/**
 * Parse input into number array
 */
export function parseNumbers(input: string): number[] {
  return parseLines(input).map(Number);
}

/**
 * Parse input into 2D grid
 */
export function parseGrid(input: string): string[][] {
  return parseLines(input).map(line => line.split(''));
}

/**
 * Sum an array of numbers
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

/**
 * Product of an array of numbers
 */
export function product(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc * n, 1);
}

/**
 * Greatest common divisor
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Least common multiple
 */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

/**
 * Range generator
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => start + i);
}

/**
 * Modulo operation that handles negative numbers correctly
 */
export function modulo(n: number, m: number): number {
  return (n + m) % m;
}