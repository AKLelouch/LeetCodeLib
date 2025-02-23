/**
 * @param {string} goods
 * @return {string[]}
 */
var goodsOrder = function (goods) {
  let charArr = Array.from(goods).sort();
  let visited = new Array(charArr.length).fill(0);
  let res = [];
  const dfs = (depth, curStr) => {
    if (depth === goods.length) {
      res.push(curStr);
      return;
    }

    for (let i = 0; i < goods.length; i++) {
      if (visited[i] || (i > 0 && !visited[i - 1] && charArr[i] === charArr[i - 1])) continue;

      curStr += charArr[i];
      visited[i] = 1;
      dfs(depth + 1, curStr);
      curStr = curStr.substring(0, curStr.length - 1);
      visited[i] = 0;
    }
  };

  dfs(0, '');
  return res;
};

export { goodsOrder };
