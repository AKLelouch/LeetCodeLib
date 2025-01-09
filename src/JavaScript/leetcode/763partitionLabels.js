/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let curPos = 0;
  let res = [[0, 0]];
  let postionMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!postionMap.has(s[i])) {
      postionMap.set(s[i], [i, i]);
    } else {
      let pos = postionMap.get(s[i]);
      pos[1] = i;
      postionMap.set(s[i], pos);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let curRange = res[curPos];
    let curCharRange = postionMap.get(s[i]);
    if (curRange[0] <= curCharRange[0] && curRange[1] >= curCharRange[0]) curRange[1] = Math.max(curRange[1], curCharRange[1]);
    else {
      res[curPos] = curRange;
      curPos++;
      res[curPos] = [i, i];
    }
  }
  return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
