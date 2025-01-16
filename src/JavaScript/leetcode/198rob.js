/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0 || !nums) return 0;
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(-Infinity);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]));

/**
 * 打家劫舍
 * 滚动数组版
 * @param {*} nums
 * @returns
 */
var rob2 = function (nums) {
  if (nums.length === 0 || !nums) return 0;
  if (nums.length === 1) return nums[0];

  let firstDP = nums[0];
  let secondDP = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let tmp = secondDP;
    secondDP = Math.max(nums[i] + firstDP, tmp);
    firstDP = tmp;
  }

  return secondDP;
};

console.log(rob2([1, 2, 3, 1]));
