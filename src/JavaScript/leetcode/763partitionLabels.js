/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let curPos = 0;
  let resRange = [[0, 0]];
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
    let curRange = resRange[curPos];
    let curCharRange = postionMap.get(s[i]);
    if (curRange[0] <= curCharRange[0] && curRange[1] >= curCharRange[0]) curRange[1] = Math.max(curRange[1], curCharRange[1]);
    else {
      resRange[curPos] = curRange;
      curPos++;
      resRange[curPos] = curCharRange;
    }
  }

  return resRange.map(range => range[1] - range[0] + 1);
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
