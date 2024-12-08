/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

  const charPos = (ch) => {
    return ch.charCodeAt() - 'a'.charCodeAt();
  }

  const check = () => {
    for (let i = 0; i < 26; ++i) {
      if (count1[i] !== count2[i]) {
        return false;
      }
    }
    return true;
  }

  if (s.length < p.length) {
    return [];
  }

  const res = [];
  // p的词频
  const count1 = Array(26).fill(0);
  // 滑动窗口的词频
  const count2 = Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    count1[charPos(p[i])]++;
    count2[charPos(s[i])]++;
  }
  if (check()) res.push(0)

  for (let i = 0; i < s.length - p.length; ++i) {
    --count2[charPos(s[i])];
    ++count2[charPos(s[i + p.length])];
    if (check()) {
      res.push(i + 1)
    }
  }

  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'))