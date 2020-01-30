// https://leetcode.com/problems/longest-common-prefix/

/**
 * 逐一比较各个字符
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) {
    return '';
  }

  // calc min length str's length
  let minLen = strs[0].length;
  for (let i = 0, len = strs.length; i < len; i++) {
    if (strs[i].length < minLen) {
      minLen = strs[i].length;
    }
  }

  let theSame = false;
  let char = null;
  let maxCommon = 0;
  for (let j = 0; j < minLen; j++) {
    char = strs[0].charAt(j);
    theSame = strs.every(str => {
      return str.charAt(j) === char;
    });

    if (theSame) {
      maxCommon = j + 1;
    } else {
      maxCommon = j;
      break;
    }
  }

  return strs[0].slice(0, maxCommon);
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["a"]));