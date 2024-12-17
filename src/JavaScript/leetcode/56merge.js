/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  if (intervals.length === 1) return intervals;

  // quickSort(intervals, 0, intervals.length - 1);
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];
  let start = 0,
    end = 0;
  while (end < intervals.length) {
    res.push(intervals[start]);
    for (; end < intervals.length; ++end) {
      if (res[res.length - 1][1] >= intervals[end][0]) {
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[end][1]);
      } else {
        break;
      }
    }
    start = end;
  }
  return res;
};

console.debug(
  merge([
    [1, 3],
    [0, 2],
    [2, 3],
    [4, 6],
    [4, 5],
    [5, 5],
    [0, 2],
    [3, 3],
  ]),
);
