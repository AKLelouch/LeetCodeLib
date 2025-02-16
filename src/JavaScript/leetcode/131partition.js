/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (!s) return [];
  let ans = [];
  const isHuiwen = str => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  };

  let path = [];
  const dfs = i => {
    if (i >= s.length) return;

    for (let j = i; j < s.length; j++) {
      let curStr = s.substring(i, j + 1);
      if (!isHuiwen(curStr)) {
        continue;
      }
      path.push(curStr);
      if (j === s.length - 1) ans.push([...path]);
      dfs(j + 1);
      path.pop();
    }
  };

  dfs(0);
  return ans;
};

partition('aab');
