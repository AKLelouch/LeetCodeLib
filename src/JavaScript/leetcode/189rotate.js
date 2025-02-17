/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let realRotate = k % nums.length;
  let spliceArr = nums.splice(nums.length - realRotate);
  nums.unshift(...spliceArr);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
