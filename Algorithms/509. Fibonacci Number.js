// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0 || N === 1) {
    return N;
  }
  
  return fib(N-1) + fib(N - 2);
};

var fib = function(N) {
  if (N === 0 || N === 1) {
    return N;
  }
  
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 2; i <= N; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  
  return sum;
};

var fib = function(N) {
  if (N <= 1) {
    return N;
  }
  
  let a = 0;
  let b = 1;
  for (let i = 2; i <= N; i++) {
    if (i === N) {
      return a + b;
    }
    b = a + b;
    a = b - a;
  }
  
  return sum;
};