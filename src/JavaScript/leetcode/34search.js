/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  if (target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];

  return [
    binarySearchIterate(nums, target),
    binarySearchIterate2(nums, target),
  ];
};

const binarySearchIterate = (array, target) => {
  let i = 0;
  let j = array.length;
  while (i < j) {
    let mid = parseInt((i + j) / 2);
    if (target <= array[mid]) {
      j = mid;
    }
    if (array[mid] < target) {
      i = mid + 1;
    }
  }
  if (array[i] === target) return i;
  else return -1;
};
const binarySearchIterate2 = (array, target) => {
  let i = 0;
  let j = array.length;
  while (i < j) {
    let mid = parseInt((i + j) / 2);
    if (target < array[mid]) {
      j = mid;
    }
    if (array[mid] <= target) {
      i = mid + 1;
    }
  }
  if (array[i - 1] === target) return i - 1;
  else return -1;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
