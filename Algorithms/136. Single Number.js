/**
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 */

/**
 * 利用对象记录
 * @param {*} nums 
 */
var singleNumber = function(nums) {
  const checkedObj = {};
  nums.forEach(key => {
    if (!checkedObj[key]) {
      checkedObj[key] = true;
    } else {
      delete checkedObj[key];
    }
  })
  
  return Object.keys(checkedObj)[0];
};

/**
 * 利用异或运算符，a ^ a = 0, 0 ^ x = x
 * @param {*} nums 
 */
var singleNumber = function(nums) {
  return nums.reduce((accumulator, currentValue) => {
    return accumulator ^ currentValue;
  });
};


/**
 * 数组查找, lr和rl查找到的第一个下标一样，则只出现一次
 */
var singleNumber = function(nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

/**
 * 数组排序再查询
 * @param {*} nums 
 */
var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  nums.sort();
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[i-1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
    i++;
  }
};
