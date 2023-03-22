const add = function (...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};

const subtract = function (num1, ...args) {
  let difference = num1;
  for (let arg of args) {
    difference -= arg;
  }
  return difference;
};

const sum = function (array) {
  let sum = 0;
  for (item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function (array) {
  let product = 1;
  for (item of array) {
    product *= item;
  }
  return product;
};

const power = function (base, exponent) {
  let ans = base;
  for (let counter = 1; counter != exponent; counter++) {
    ans *= base;
  }
  return ans;
};

const factorial = function (num) {
  if (num == 0 || num == 1) return 1;

  for (counter = num - 1; counter >= 1; counter--) {
    num *= counter;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
