/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length) {
    return [];
  }

  let res = [];

  let path = [];
  const dfs = (index) => {
    if (index === nums.length) {
      res.push([...path]);
      return;
    }

    // 选
    path.push(nums[index]);
    dfs(index + 1);
    path.pop();

    // 不选
    dfs(index + 1);
  };
  dfs(0);
  return res;
};
