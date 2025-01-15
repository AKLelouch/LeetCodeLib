/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let pathArray = new Array(nums.length).fill(0);
  for (let i = nums.length - 2; i >= 0; i--) {
    let minPath = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < nums.length) minPath = Math.min(pathArray[i + j], minPath);
    }
    pathArray[i] = minPath + 1;
  }

  return pathArray[0];
};

console.log(jump([2, 1]));
export { jump };
