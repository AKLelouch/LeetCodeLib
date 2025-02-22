/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  const dfs = (a, b, pos) => {
    if (a < 0 || a > m - 1 || b < 0 || b > n - 1) return false;
    if (board[a][b] !== word[pos]) return false;
    if (pos === word.length - 1) {
      return true;
    } else {
      return dfs(a + 1, b, pos + 1) || dfs(a - 1, b, pos + 1) || dfs(a, b + 1, pos + 1) || dfs(a, b - 1, pos + 1);
    }
  };
  let res;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        res = dfs(i, j, 0);
        if (res) return true;
      }
    }
  }
  return false;
};

export { exist };
