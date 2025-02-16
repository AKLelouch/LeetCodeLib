/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let mid = i + Math.floor((j - i) / 2);

    if (nums[mid] > nums[j]) {
      // 最小值在右边
      i = mid + 1;
    } else if (nums[mid] < nums[j]) {
      // 最小值在左边
      j = mid;
    }
  }
  return nums[i];
};
findMin([3, 1, 2]);
