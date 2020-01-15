/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 找到第一个0的位置，以这个为开始往后查找，遇到非0的则排到前面，并把原来的位置设置为0
 * @param {*} nums 
 */
var moveZeroes = function(nums) {
  let min = nums.indexOf(0);
  let len = nums.length;
  if (len > 1 && min > -1) {
    for (let i = min, len = nums.length; i < len; i++) {
      if (nums[i] !== 0) {
        nums[min] = nums[i];
        nums[i] = 0;
        min++;
      }
    }
  }
};


moveZeroes([0,1,0,3,12]);
moveZeroes([1,0,3,7,12]);
moveZeroes([0,1,0,3,0,12,0,0]);
moveZeroes([0,1,0,39,0,120,0,4,0]);
moveZeroes([4,2,4,0,0,3,0,5,1,0])