/**
 * @param {string}
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0, len = s.length; i < len; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }

  return -1;
};

/**
 *
 * @param {*} s
 */
var firstUniqChar = function(s) {
  let dict = {};
  for (let i = 0, len = s.length; i < len; i++) {
    dict[]
  }

  return -1;
};

console.log(firstUniqChar("leetcode"))