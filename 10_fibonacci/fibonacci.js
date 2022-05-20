const fibonacci = function(input) {
  if (input < 0) return 'OOPS'

  let fib = [1, 1]
  for (let i = 2; i <= +input; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[+input - 1]
};

// Do not edit below this line
module.exports = fibonacci;
