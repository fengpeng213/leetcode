// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * 
 * @param {*} A 
 */
var sortedSquares = function(A) {
  return A.map(val => {
    return val * val;
  }).sort((a, b) => {
    return a - b;
  });
};


/**
 * 一次遍历，因为已经排序，绝对值最大的一定是头或者尾
 */

var sortedSquares = function(A) {
  let ret = [];

  let head = 0;
  let tail = A.length - 1;
  while (head <= tail) {
    if (Math.abs(A[head]) > Math.abs(A[tail])) {
      ret.unshift(A[head] ** 2);
      head++;
    } else {
      ret.unshift(A[tail] ** 2);
      tail--;
    }
  }

  return ret;
}

var test1 = function() {
  let i = 0;
  console.time();

  for (let i = 0; i < 100000; i++) {
    sortedSquares([-7,-3,2,3,11]);
    i++;
  }

  console.timeEnd();
}

test1();


var sortedSquares2 = function(A) {
  let ret = [];

  let head = 0;
  let tail = A.length - 1;
  while (head <= tail) {
    if (Math.abs(A[head]) > Math.abs(A[tail])) {
      ret.push(A[head] ** 2);
      head++;
    } else {
      ret.push(A[tail] ** 2);
      tail--;
    }
  }

  return ret.reverse();
}

var test2 = function() {
  let i = 0;
  console.time();

  for (let i = 0; i < 100000; i++) {
    sortedSquares2([-7,-3,2,3,11]);
    i++;
  }

  console.timeEnd();
}
test2();


/**
  经过多次测试，使用unshift的成本高很多.
  为什么呢？unshift是需要向头部插入，并移动后续的元素，这个确实成本比较高，
  这个理解也并不正确，是否理解到这里就可以了呢？
  default: 28.190ms
  default: 10.109ms

  default: 22.101ms
  default: 13.189ms

  default: 19.880ms
  default: 11.912ms

  default: 21.302ms
  default: 10.828ms

  default: 20.387ms
  default: 10.740ms

  default: 19.327ms
  default: 10.017ms
 */

function verifyUnshiftMove() {
  let arr = [
    {
      id: 12
    },
    {
      id: 23
    }
  ];
  
  let p = arr[0];
  // p.id = 24;
  
  console.log(arr[0].id); // 24
  console.log(arr[2]); // undefined
  
  arr.unshift({
    id: 88
  });
  
  console.log(p.id); // 12
  arr[0].id = 88;
  console.log(p.id); // 12, 这个意味着，p指向的地址没有改变，但是arr已经被重新分配了空间，arr[0]和p指向的不是一个空间了

  // 如何读取内存中，p后面接下来的几个字节呢？多读取几个字节

  console.log(arr[2]); // { id: 23 }
}

verifyUnshiftMove();
