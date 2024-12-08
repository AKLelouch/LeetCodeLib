/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || !matrix.length) return;

  const levelCount = Math.floor((matrix.length) / 2);
  let n = matrix.length - 1;
  for (let i = 0; i < levelCount; i++) {
    for (let j = i; j < n - i; j++) {
      // let a1 = matrix[i][j];
      // let a2 = matrix[j][n - i];
      // let a3 = matrix[n - i][n - j];
      // let a4 = matrix[n - j][i];
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = tmp;
    }
  }
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);