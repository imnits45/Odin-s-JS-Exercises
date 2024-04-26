const add = (num1, num2) => num1+num2;

const subtract = (num1, num2) => Math.abs(num1 - num2);

const sum = (arr) => arr.reduce((total,curr) => total+curr, 0);

const multiply = (arr) => arr.reduce((total, curr) => total * curr, 1);
const power = (num1, num2) => Math.pow(num1, num2);

const factorial = (num) => {
  if(num < 2)
    return 1;
  return num * factorial(num - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
