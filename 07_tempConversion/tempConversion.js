const convertToCelsius = function (fahrenheit) {
  return Number(Math.round((fahrenheit - 32) * (5 / 9) + `e1`) + `e-1`);
};

const convertToFahrenheit = function (celcius) {
  return Number(Math.round(celcius * (9 / 5) + 32 + `e1`) + `e-1`);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
