/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  let longestArr = [];
  let minNum = Number.MAX_SAFE_INTEGER;
  nums.map((value, key) => {
    minNum = Math.min(value, minNum);
  })
  let offset = 0 - minNum;
  nums.map((value, key) => {
    let curPos = value + offset;
    longestArr[curPos] = 1;
  })
  for (let i = 0; i < longestArr.length; i++) {
    if (typeof longestArr[i] !== 'number') {
      longestArr[i] = 0
    }
  }
  let count = longestArr[0];
  let max = longestArr[0];
  for (let i = 1; i < longestArr.length; i++) {
    let cur = longestArr[i];
    let pre = longestArr[i - 1];
    if (cur !== 0 || pre != 0) {
      switch (cur - pre) {
        case -1:
          count = 0;
          break;
        case 0:
        case 1:
          count++;
          max = Math.max(count, max);
          break;
      }
    }
  }
  return max;
};

var longestConsecutive1 = function (nums) {
  if (!nums.length) return 0;

  let startSet = new Set();
  let visited = new Map();

  nums.forEach(element => {
    startSet.add(element);
  });

  let max = Number.MIN_SAFE_INTEGER;
  startSet.forEach(element => {
    let cur = element;
    let step = 0;
    while (startSet.has(cur)) {
      if (visited.has(cur)) {
        step += visited.get(cur);
        visited.set(element, step);
        break;
      }

      visited.set(element, ++step);
      cur--;
    }
    max = Math.max(step, max);
  });
  return max;
}

var longestConsecutive2 = function (nums) {
  if (!nums.length) return 0;

  let startSet = new Set();

  nums.forEach(element => {
    startSet.add(element);
  });

  let max = 0;
  startSet.forEach(element => {
    if (startSet.has(element - 1)) {
      return;
    }
    let curNum = element;
    let curSteps = 1;
    while (startSet.has(curNum + 1)) {
      curSteps++;
      curNum++
    }
    max = Math.max(max, curSteps);
  });
  return max;
}
console.log(longestConsecutive1([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999]))