/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m][n];
};

console.log(uniquePaths(3, 7));
