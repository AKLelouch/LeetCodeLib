/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const width = grid[0].length;
  const height = grid.length;
  let num = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= height || y < 0 || y >= width) return;


    if (grid[x][y] === '2' || grid[x][y] === '0') {
      return;
    }

    if (grid[x][y] === '1') {
      grid[x][y] = '2';
    }

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }

  while (true) {
    let position = null;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] === '1') {
          position = {
            x: i,
            y: j
          }
          break;
        }
      }
      if (position) break;
    }

    if (position) {
      num++;
      dfs(position.x, position.y);
    }
    else
      break;
  }
  return num;
};