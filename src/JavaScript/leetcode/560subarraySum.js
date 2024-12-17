/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums && nums.length === 0) return 0;

  let preNums = new Array(nums.length + 1);
  preNums[0] = 0;
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  for (let i = 1; i < preNums.length; ++i) {
    preNums[i] = preNums[i - 1] + nums[i - 1];
    if (map.has(preNums[i] - k)) {
      count += map.get(preNums[i] - k)
    }
    map.set(preNums[i], map.has(preNums[i]) ? map.get(preNums[i]) + 1 : 1);
  }
  return count;
};
subarraySum([1, 2, 1], 3)

// 超时
var subarraySum2 = function (nums, k) {
  if (!nums && nums.length === 0) return 0;

  let count = 0;
  for (let left = 0; left < nums.length; left++) {
    let sum = 0;
    for (let right = left; right < nums.length; right++) {
      sum += nums[right];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};