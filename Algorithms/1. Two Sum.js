/**
 * https://leetcode.com/problems/two-sum/
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let newArr = [...nums];
  newArr.sort((a, b) => {
    return a - b;
  });

  let left = 0;
  let right = nums.length - 1;
  let sum = 0;
  let finded = false;
  while (left < right) {
    sum = newArr[left] + newArr[right];
    if (sum === target) {
      finded = true;
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  if (finded) {
    return [nums.indexOf(newArr[left]), nums.lastIndexOf(newArr[right])];
  }

  return [];
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))