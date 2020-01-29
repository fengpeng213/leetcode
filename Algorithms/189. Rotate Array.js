// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let rArr = nums.splice(nums.length - k);
  nums.splice(0, 0, ...rArr);
  // return nums
};

console.log(rotate([1,2,3,4,5,6,7], 1));
console.log(rotate([1,2,3,4,5,6,7], 2));
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 1))
console.log(rotate([-1,-100,3,99], 2))