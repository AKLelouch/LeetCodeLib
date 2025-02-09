/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const charOcur = new Array(26).fill(0);
  for (let i = 0; i < strs.length; i++) {
    let cur = [...charOcur];
    const str = strs[i];
    for (let j = 0; j < str.length; j++) {
      cur[str[j].charCodeAt() - 'a'.charCodeAt()]++;
    }

    const number = cur.join();
    if (map.has(number)) {
      let strArr = map.get(number);
      strArr.push(str);
    } else {
      map.set(number, [str]);
    }
  }

  const res = [];
  map.forEach(val => {
    res.push(val);
  });
  return res;
};
console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']));
