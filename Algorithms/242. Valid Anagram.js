/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 判断是相通字母异序词
 */
// var isAnagram = function(s, t) {
//   const sArr = s.split('').sort();
//   const tArr = t.split('').sort();

//   return sArr.length === tArr.length && sArr.every((val, i) => {
//     return val === tArr[i];
//   });
// };

var isAnagram = function(s, t) {
  return (typeof s === 'string' && typeof t === 'string') && (s.length === t.length) && (s.split('').sort().join() === t.split('').sort().join());
};

console.log(isAnagram('a', 'b'));

/**
 * What if the inputs contain unicode characters? How would you adapt your solution to such case?
 * TODO: 如果有其他特殊字符呢？
 */