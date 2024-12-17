/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (!matrix && matrix.length === 0) return;

  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    let rowIsZero = false;
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (!rowIsZero) {
          for (let a = 0; a < n; a++) {
            if (matrix[i][a] != 0) matrix[i][a] = null;
          }
          rowIsZero = true;
        }

        for (let a = 0; a < m; a++) {
          if (matrix[a][j] != 0) matrix[a][j] = null;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(matrix);
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
