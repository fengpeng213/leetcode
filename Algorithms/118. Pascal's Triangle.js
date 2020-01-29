// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let re = [];

  // preset element 1 and 2
  if (numRows >= 1) {
    re.push([1]);
    if (numRows >= 2) {
      re.push([1, 1]);
    }
  }

  if (numRows <= 2) {
    return re;
  }

  // calc element n, n >= 3
  for (let i = 3; i <= numRows; i++) {
    let line = new Array(i).fill(1);
    for (let j = 1; j < i - 1; j++) {
      line[j] = re[i - 2][j - 1] + re[i - 2][j];
    }

    re.push(line);
  }

  return re;
};

console.log(generate(5));
