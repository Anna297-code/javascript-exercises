const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, value) => acc * value, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1;
  }

  let result = a;

  for (let index = a; index > 1; index--) {
    result *= index - 1;
  }

  return result;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
