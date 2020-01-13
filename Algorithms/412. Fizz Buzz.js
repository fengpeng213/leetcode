/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * 最直接的方式就是直接for循环搞定
 * @param {*} n 
 */
const fizzBuzz = function(n) {
  const arr = new Array(n);
  for (let i = 1; i <= n; i++) {
    let value = '' + i;
    if (i % 15 === 0) {
      value = 'FizzBuzz';
    } else if (i % 5 === 0) {
      value = 'Buzz';
    } else if (i % 3 === 0) {
      value = 'Fizz';
    }

    arr[i - 1] = value;
  }

  return arr;
};

/**
 * 构造出一个简单的字典
 */
const fizzBuzz2 = function(n) {
  const dict = {
    0: 'FizzBuzz',
    3: 'Fizz',
    6: 'Fizz',
    9: 'Fizz',
    12: 'Fizz',
    5: 'Buzz',
    10: 'Buzz'
  };

  let i = 1;
  let arr = new Array(n);
  while (i <= n) {
    arr[i - 1] = dict[i % 15] || ('' + i);
    i++;
  }

  return arr;
}


/**
 * 将Fizz和Buzz分开
 */
const fizzBuzz3 = function(n) {
  return Array.from({ length: n + 1 }, (_, i) => {
    return (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i;
  }).slice(1);
}

const fizzBuzz4 = function(n) {
  return new Array(n + 1).fill(0).map((_, i) => {
    return (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i;
  }).slice(1);
}

console.log(fizzBuzz4(10));
// [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz' ]