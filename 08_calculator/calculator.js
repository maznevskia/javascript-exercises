const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for ( i in array ) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let total = 1;
  for ( i in array ) {
    total *= array[i];
  }
  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	let total = 1;
  if (a == 0)
    return 1;
  while ( a >= 1 ) {
    total *= a;
    a--;
  }

  return total;
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
