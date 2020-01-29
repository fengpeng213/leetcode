// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 * 如果对于很小的数字，不会超出表示范围，可以通过数字和数组的转换实现
 */
var plusOne = function(digits) {
  return (Number(digits.join('')) +  1).toString().split('').map(val => {
    return Number(val);
  });
};


var plusOne = function(digits) {
  let i = digits.length - 1;
  let hasCarry = false; // 有进位

  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
      hasCarry = true;
    } else {
      digits[i]++;
      hasCarry = false;
      break;
    }

    i--;
  }

  // 第一位有进位
  if (i < 0 && hasCarry) {
    digits.unshift(1);
  }

  return digits;
}

console.log(plusOne([1,2,3]))
console.log(plusOne([1,2,9]))
console.log(plusOne([9]))
console.log(plusOne([9,9]));
console.log(plusOne([8,9,9,9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));