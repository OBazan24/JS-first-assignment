// The initial numbers that must be verified.
// Check if all numbers are divisible by 5. Cache the result in a variable.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const divByFive = n1 % 5;
console.log(divByFive);

// Check if the first number is larger than the last. Cache the result in a variable

const largerThen = n1 > n4;
console.log(largerThen);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const subMultiplyDivide = n2 - (n1 * n3) / n4;
console.log(
  `The numbers are valid according to the provided criteria: ${subMultiplyDivide}.`
);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isOver25 = subMultiplyDivide > 25;
console.log(
  `The numbers are valid according to the provided criteria: ${isOver25}.`
);

// `The four numbers are valid according to the provided criteria: ${isValid}.`)

// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

const dist = 1500;
const budget = 175;
const fuelCost = 3;
const carSpeed = [55, 60, 75];
