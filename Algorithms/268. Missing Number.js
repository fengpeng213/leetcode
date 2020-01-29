/**
 * https://leetcode.com/problems/missing-number/submissions/
 */

/**
 * 简单排序，比对key, value
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
};

/**
 * 查找过程使用二分查询
 * @param {*} nums 
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  let left = 0;
  let right = nums.length;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}

/**
 * 因为只缺少一个元素，使用 异或 运算， x ^ x = 0x0000, 可获取得到缺少的值.
 * @param {*} nums 
 */
var missingNumber = function(nums) {
  let value = 0x0000;
  for (let i = 0, len = nums.length; i <= len; i++) {
    value ^= i;
  }

  nums.forEach(item => {
    value ^= item;
  });

  return value;
}

/**
 * 0-n求和，然后减去数组求和，得到缺少的值
 * @param {*} nums 
 */
var missingNumber = function(nums) {
  let sum = nums.length;
  for (let i = 0, len = nums.length; i < len; i++) {
    sum += i;
    sum -= nums[i];
  }

  return sum;
}

console.log(missingNumber([0]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
