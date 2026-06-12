const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator functions (basic operations from image)', () => {
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
});
