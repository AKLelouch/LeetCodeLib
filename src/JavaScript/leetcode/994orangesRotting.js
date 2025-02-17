/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let startArr = [];
  let M = grid.length;
  let N = grid[0].length;
  let count = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 2) {
        const pos = [i, j];
        startArr.push(pos);
      } else if (grid[i][j] === 1) {
        count++;
      }
    }
  }

  let round = 0;
  while (count > 0 && startArr.length) {
    round++;
    let n = startArr.length;
    for (let i = 0; i < n; i++) {
      let position = startArr.shift();
      let row = position[0];
      let col = position[1];
      if (col + 1 < N && grid[row][col + 1] === 1) {
        grid[row][col + 1] = 2;
        count--;
        startArr.push([row, col + 1]);
      }
      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        grid[row][col - 1] = 2;
        count--;
        startArr.push([row, col - 1]);
      }
      if (row + 1 < M && grid[row + 1][col] === 1) {
        grid[row + 1][col] = 2;
        count--;
        startArr.push([row + 1, col]);
      }
      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        grid[row - 1][col] = 2;
        count--;
        startArr.push([row - 1, col]);
      }
    }
  }
  if (count) return -1;
  else return round;
};

orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);
