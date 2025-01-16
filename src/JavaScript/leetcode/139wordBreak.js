/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  let dictSet = new Set(wordDict);
  dp[0] = true;
  for (let i = 1; i <= s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && dictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }

    // let preExistWordPostion = i - 1;
    // while (preExistWordPostion >= 0) {
    //   if ((preExistWordPostion === 0 || dp[preExistWordPostion - 1]) && dictSet.has(s.substring(preExistWordPostion, i))) {
    //     dp[i - 1] = true;
    //     dictSet.add(s.substring(0, i));
    //   }
    //   preExistWordPostion--;
    // }
  }
  return dp[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
