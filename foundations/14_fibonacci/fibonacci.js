const fibonacci = function (number) {
  number = Number(number);
  if (number < 0) {
    return "OOPS";
  }

  if (number === 0) {
    return 0;
  }

  let previous = 1;
  let previousPrevious = 1;

  for (let index = 0; index < number - 2; index++) {
    let newNumber = previous + previousPrevious;
    previousPrevious = previous;
    previous = newNumber;
  }

  return previous;
};

// Do not edit below this line
module.exports = fibonacci;
