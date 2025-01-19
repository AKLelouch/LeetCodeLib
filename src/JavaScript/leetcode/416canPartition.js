/**
 * 非动态规划
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length <= 1) return false;
  let sum = nums.reduce((pre, cur) => pre + cur);
  if (sum % 2 !== 0) return false;
  let target = sum / 2;
  let dp = new Array(nums.length + 1);

  dp[0] = new Array(target + 1).fill(false);
  dp[0][0] = true;
  for (let i = 1; i < dp.length; i++) {
    dp[i] = new Array(target + 1);
    dp[i][0] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] || (j - nums[i - 1] >= 0 && dp[i - 1][j - nums[i - 1]]);
    }
  }

  return dp[nums.length][target];
};

console.log(canPartition([1, 5, 11, 5]));
