#!/usr/bin/env node

// Calculator supporting the four basic operations:
// - addition (add or +)
// - subtraction (subtract or -)
// - multiplication (multiply or * or x)
// - division (divide or /)

// Usage (CLI):
//   node src/calculator.js add 2 3
//   node src/calculator.js + 2 3
// Example programmatic usage:
//   const { add, subtract, multiply, divide } = require('./src/calculator');

'use strict';

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return n;
}

// Exported arithmetic functions for programmatic use
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI behavior
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  if (!op || aRaw === undefined || bRaw === undefined) {
    console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
    console.error('Operations: add (+), subtract (-), multiply (*), divide (/)');
    process.exit(2);
  }

  let result;
  try {
    const a = toNumber(aRaw);
    const b = toNumber(bRaw);
    const operator = op.toString().toLowerCase();

    switch (operator) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case '*':
      case 'x':
      case 'times':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
      case '÷':
        result = divide(a, b);
        break;
      default:
        throw new Error(`Unknown operation: ${op}`);
    }

    // Print result (no extra text so it's script-friendly)
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}
