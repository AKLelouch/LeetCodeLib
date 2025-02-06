/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3 || !nums) return [];
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (right > left && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
