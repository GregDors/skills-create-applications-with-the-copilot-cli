const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator functions (basic operations and extended operations)', () => {
  test('2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 => 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 => 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('supports negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(subtract(-5, 3)).toBe(-8);
    expect(multiply(-4, 2)).toBe(-8);
    expect(divide(-9, 3)).toBe(-3);
  });

  test('supports floating point numbers (toBeCloseTo)', () => {
    expect(add(2.5, 1.2)).toBeCloseTo(3.7);
    expect(divide(1, 3)).toBeCloseTo(0.3333333, 5);
  });

  // New tests for extended operations shown in images
  test('modulo with 5 % 2 => 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power with 2 ^ 3 => 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root with √16 => 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  // Edge cases
  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow('Modulo by zero');
  });

  test('power with negative exponent works (2^-3 => 0.125)', () => {
    expect(power(2, -3)).toBeCloseTo(0.125);
  });

  test('square root of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });
});
