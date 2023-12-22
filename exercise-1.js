/*Exercise 1:
----------
Write a JavaScript program to check two
numbers and return true if one of the numbers
is 100 or if the sum of the two numbers is
100
*/

function compareTwoNumbers(num1, num2) {
    if (num1 > 100) {
        console.log("True for num1"); 
    } else if (num2 > 100) {
        console.log("True for num2"); 
    } else {
        console.log("False"); 
    }
}

compareTwoNumbers(101,102);

function compareTwoNumbersAgain(num1, num2) {
    if (num1 > 100 && num2 > 100) {
        console.log("Both numbers are greater than 100");
    } else {
        console.log("At least one of the numbers is not greater than 100");
    }
}

compareTwoNumbersAgain(101,102);

// Provide additional information as to which of the two, num1 or num2, are greater than 100, both?
// one but not the other? neither?

function finalTwoNumbers(num1, num2) {
    if (num1 > 100 || num2 > 100) {
        if (num1 > num2) {
            console.log("num1 is greater than 100 and greater than num2");
            console.log("num2 is not greater than 100");
        } else if (num2 > num1) {
            console.log("num2 is greater than 100 and greater than num1");
            console.log("num1 is not greater than 100");
        } else {
            console.log("Both numbers are greater than 100 and are equal");
        }
    } else {
        console.log("Neither num1 nor num2 is greater than 100");
    }
}

module.exports = finalTwoNumbers;