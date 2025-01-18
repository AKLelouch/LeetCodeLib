/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.unshift(0);
  let dpMax = new Array(nums.length);
  let dpMin = new Array(nums.length);
  dpMax[0] = 0;
  dpMin[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    if (nums[i] < 0) {
      dpMax[i] = Math.max(dpMin[i - 1] * current, dpMax[i - 1]);
      dpMin[i] = Math.min(dpMax[i - 1] * current, dpMin[i - 1]);
    } else {
      dpMax[i] = Math.max();
    }
  }
};

console.log(maxProduct([2, 3, -2, 4]));
