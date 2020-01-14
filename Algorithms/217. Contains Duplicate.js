/**
 * https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false;
  }

  let dict = {};
  let duplacate = false;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (dict[nums[i]]) {
      duplacate = true;
      break;
    } else {
      dict[nums[i]] = 1;
    }
  }

  return duplacate;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))