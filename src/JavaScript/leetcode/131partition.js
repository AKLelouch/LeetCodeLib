/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let path = [];
  const isHuiwen = str => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i++] !== str[j--]) return false;
    }
    return true;
  };

  const dfs = function (index) {
    if (index === s.length) {
      res.push([...path]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      const subStr = s.substring(index, i + 1);
      const flag = isHuiwen(subStr);
      if (!flag) {
        continue;
      }
      path.push(subStr);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return res;
};

partition('aab');
