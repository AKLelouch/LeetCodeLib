/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;
  let left = [];
  left[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(height[i], left[i - 1]);
  }

  let right = [];
  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(height[i], right[i + 1]);
  }

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    res += Math.min(left[i], right[i]) - height[i];
  }
  return res;
};

export { trap };
