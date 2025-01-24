/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length > text2.length ? text1 : text2;
  let n = text1.length > text2.length ? text2 : text1;
  let dp = new Array(n.length + 1).fill(0).map(() => new Array(m.length + 1).fill(0));
  for (let i = 1; i < n.length + 1; i++) {
    for (let j = 1; j < m.length + 1; j++) {
      // if(m[j - 1] === n[i - 1] ){
      //   dp[i][j] = 1;
      // }
      if (m[j - 1] === n[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[n.length][m.length];
};

console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq'));
