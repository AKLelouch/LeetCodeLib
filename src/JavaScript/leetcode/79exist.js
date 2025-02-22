/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const dfs = (a, b, pos) => {
    if (a < 0 || a > m - 1 || b < 0 || b > n - 1) return false;
    if (visited[a][b]) return false;
    if (board[a][b] !== word[pos]) return false;
    if (pos === word.length - 1) {
      return true;
    } else {
      visited[a][b] = 1;
      let res = dfs(a + 1, b, pos + 1) || dfs(a - 1, b, pos + 1) || dfs(a, b + 1, pos + 1) || dfs(a, b - 1, pos + 1);
      visited[a][b] = 0;
      return res;
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }
  return false;
};

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCB',
);

export { exist };
