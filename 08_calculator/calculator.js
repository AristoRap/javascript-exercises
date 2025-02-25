const add = function(x, y) {
	return +x + +y
};

const subtract = function(x, y) {
  return +x - +y

};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum += num, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, num) => (product *= num));
};

const power = function(x, y) {
  return x ** y

};

const factorial = function(num) {
  let product = 1
  for (let i = 1; i <= num; i++) {
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
