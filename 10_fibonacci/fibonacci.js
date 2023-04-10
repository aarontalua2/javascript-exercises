const fibonacci = function (num) {
  if (num <= 0 || typeof +num != "number") return "OOPS";
  if (num == 1) return 1;

  fib = [1, 1];
  for (i = 2; i < num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  console.log(fib[num - 2]);
  return fib[num - 1];
};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
