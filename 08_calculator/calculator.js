const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(args) {
  let summ =0
  for(arg of args){
    summ += arg
  }
	return summ;
};

const multiply = function(args) {
  let summ =1
  for(arg of args){
    summ *= arg
  }
	return summ;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	if(a <= 1){
    return 1
  } else{
    return a * factorial(a-1)
  }
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
