const finalTwoNumbers = require('./finalTwoNumbers');

test('neither num1 nor num2 is greater than 100', () => {
  expect(finalTwoNumbers(50, 60)).toBe("Neither num1 nor num2 is greater than 100");
});

test('num1 is greater than 100 and greater than num2', () => {
  expect(finalTwoNumbers(120, 80)).toBe("num1 is greater than 100 and greater than num2\nnum2 is not greater than 100");
});

test('num2 is greater than 100 and greater than num1', () => {
  expect(finalTwoNumbers(80, 120)).toBe("num2 is greater than 100 and greater than num1\nnum1 is not greater than 100");
});

test('both numbers are greater than 100 and are equal', () => {
  expect(finalTwoNumbers(150, 150)).toBe("Both numbers are greater than 100 and are equal");
});

//run the following command 'npx jest'

//edge cases - negatives, zeros, & combinations

const finalTwoNumbers = require('./finalTwoNumbers');

// Test case 1
test('neither num1 nor num2 is greater than 100', () => {
  expect(finalTwoNumbers(50, 60)).toBe("Neither num1 nor num2 is greater than 100");
});

// Test case 2
test('num1 is greater than 100 and greater than num2', () => {
  expect(finalTwoNumbers(120, 80)).toBe("num1 is greater than 100 and greater than num2\nnum2 is not greater than 100");
});

// Test case 3
test('num2 is greater than 100 and greater than num1', () => {
  expect(finalTwoNumbers(80, 120)).toBe("num2 is greater than 100 and greater than num1\nnum1 is not greater than 100");
});

// Test case 4
test('both numbers are greater than 100 and are equal', () => {
  expect(finalTwoNumbers(150, 150)).toBe("Both numbers are greater than 100 and are equal");
});

// Test case 5
test('num1 is greater than 100 but num2 is not', () => {
  expect(finalTwoNumbers(120, 90)).toBe("num1 is greater than 100 and greater than num2\nnum2 is not greater than 100");
});

// Test case 6
test('num2 is greater than 100 but num1 is not', () => {
  expect(finalTwoNumbers(80, 120)).toBe("num2 is greater than 100 and greater than num1\nnum1 is not greater than 100");
});

// Test case 7
test('neither num1 nor num2 is greater than 100 and they are equal', () => {
  expect(finalTwoNumbers(90, 90)).toBe("Neither num1 nor num2 is greater than 100");
});

// Test case 8
test('both numbers are negative', () => {
  expect(finalTwoNumbers(-50, -60)).toBe("Neither num1 nor num2 is greater than 100");
});

// Test case 9
test('one number is negative and the other is positive', () => {
  expect(finalTwoNumbers(-120, 80)).toBe("num2 is not greater than 100");
});

// Test case 10
test('both numbers are zero', () => {
  expect(finalTwoNumbers(0, 0)).toBe("Neither num1 nor num2 is greater than 100");
});