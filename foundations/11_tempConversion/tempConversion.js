const convertToCelsius = function(num) {
  let farenConversion = (num - 32)*(5/9);
  let roundedValue = Math.round(farenConversion * 10)/10
  return roundedValue
  
};

const convertToFahrenheit = function(num) {
  let celsiusConversion = (num * (9/5)) + 32;
  let roundedValue = Math.round(celsiusConversion * 10)/10
  return roundedValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
