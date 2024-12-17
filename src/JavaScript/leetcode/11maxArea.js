/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height.length || height.length === 1) {
    return 0;
  }

  let x = 0;
  let y = height.length - 1;
  let maxAr = 0;
  while (x < y) {
    maxAr = Math.max(maxAr, Math.min(height[x], height[y]) * (y - x));
    if (height[x] < height[y]) {
      x++;
    } else {
      y--;
    }
  }
  return maxAr;
};