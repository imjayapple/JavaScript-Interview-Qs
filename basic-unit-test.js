// mathFunctions.js

function add(a, b) {
    return a + b;
  }
  
  function findMax(a, b) {
    return Math.max(a, b);
  }
  
  module.exports = { add, findMax };

// mathFunctions.test.js

const { add, findMax } = require('./mathFunctions');

// Test for the add function
test('add function adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 5)).toBe(4);
  expect(add(0, 0)).toBe(0);
});

// Test for the findMax function
test('findMax function finds the maximum of two numbers correctly', () => {
  expect(findMax(2, 3)).toBe(3);
  expect(findMax(-1, 5)).toBe(5);
  expect(findMax(0, 0)).toBe(0);
});

// Additional test for findMax with negative numbers
test('findMax function handles negative numbers correctly', () => {
  expect(findMax(-5, -2)).toBe(-2);
});

// Additional test for findMax with equal numbers
test('findMax function handles equal numbers correctly', () => {
  expect(findMax(10, 10)).toBe(10);
});

// npx jest  