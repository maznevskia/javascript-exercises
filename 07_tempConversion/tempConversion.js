const ftoc = function( temp ) {
  temp -= 32;
  temp *= 5 / 9;
  return +temp.toFixed(1);
};

const ctof = function( temp ) {
  temp *= 1.8;
  temp += 32;
  return +temp.toFixed(1);
};

// Do not edit below this line
module.exports = {
ftoc,
ctof
};