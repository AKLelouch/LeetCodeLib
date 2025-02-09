/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let right = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }
    while (right < s.length && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }
    res = Math.max(res, right - i);
  }
  return res;
};

export { lengthOfLongestSubstring };
