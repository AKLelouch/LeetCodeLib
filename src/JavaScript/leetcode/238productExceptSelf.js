/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let L = [];
  L[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    L[i] = nums[i - 1] * L[i - 1];
  }
  let R = [];
  R[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = nums[i - 1] * R[i + 1];
  }

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = L[i] * R[i];
  }
  return res;
};
productExceptSelf([1, 2, 3, 4]);
