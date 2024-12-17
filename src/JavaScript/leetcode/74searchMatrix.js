/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;

  const res1 = binarySearchArray(matrix, target);
  if (res1 === true) return true;
  const res = binarySearch(matrix[res1], target);
  return res;
};

const binarySearchArray = (array, target) => {
  let i = 0;
  let j = array.length;
  while (i < j) {
    let mid = parseInt((i + j) / 2);
    if (target < array[mid][0]) {
      j = mid;
    } else if (array[mid][0] < target) {
      i = mid + 1;
    } else {
      return true;
    }
  }
  return i - 1;
};
const binarySearch = (array, target) => {
  let i = 0;
  let j = array.length;
  while (i < j) {
    let mid = parseInt((i + j) / 2);
    if (target < array[mid]) {
      j = mid;
    } else if (array[mid] < target) {
      i = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

export { searchMatrix };
