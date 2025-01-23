/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));
  let res = s[0];
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (j - i === 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }

      if (dp[i][j]) {
        let tmp = s.substring(i, j + 1);
        if (tmp.length > res.length) res = tmp;
      }
    }
  }
  return res;
};

console.log(longestPalindrome('aaaa'));
