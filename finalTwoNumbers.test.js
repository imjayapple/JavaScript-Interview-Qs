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