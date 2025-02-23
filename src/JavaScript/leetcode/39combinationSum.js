/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  const dfs = (path, rest, index) => {
    if (rest < 0 || index === candidates.length) return;
    if (rest === 0) {
      res.push(path);
      return;
    }

    // 选择
    dfs([...path, candidates[index]], rest - candidates[index], index);

    // 不选择
    dfs(path, rest, index + 1);
  };
  dfs([], target, 0);
  return res;
};

combinationSum([2, 3, 6, 7], 7);
