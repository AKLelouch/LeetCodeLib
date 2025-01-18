/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.unshift(0);
  let dpMax = new Array(nums.length);
  let dpMin = new Array(nums.length);
  dpMax[1] = nums[1];
  dpMin[1] = nums[1];
  let res = nums[1];
  for (let i = 2; i < nums.length; i++) {
    let current = nums[i];
    // if (nums[i] < 0) {
    dpMax[i] = Math.max(dpMin[i - 1] * current, dpMax[i - 1] * current, current);
    dpMin[i] = Math.min(dpMin[i - 1] * current, dpMax[i - 1] * current, current);
    // } else {
    //   dpMax[i] = Math.max();
    // }
    res = Math.max(res, dpMax[i]);
  }
  return res;
};

console.log(maxProduct([2, 3, -2, 4]));
