// 

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 核心：基于原数组修改，返回修改后长度
 */

 /**
  * 循环一遍，使用splice删除重复
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === 1) {
    return 1;
  }

  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};

/**
 * 题目只要求前面的都是不相同的
 * 
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
 * 循环一遍，直接找到下一个未出现过的，拿到前面，类似冒泡排序
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len <= 1) {
    return len;
  }

  let index = 1;
  let i = 1;
  while (i < len) {
    if (nums[i] !== nums[i-1]) {
      nums[index] = nums[i];
      index++;
    }
    i++;
  }

  return index;
};
