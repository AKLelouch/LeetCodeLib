/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return [''];
  if (n === 1) return ['()'];

  let ans = [];
  const dfs = (res, left, right) => {
    if (left > n || right > left) return;
    if (right === n) {
      ans.push(res);
      return;
    }

    // 左括号
    dfs(res + '(', left + 1, right);

    // 右括号
    dfs(res + ')', left, right + 1);
  };
  dfs('', 0, 0);
  return ans;
};
console.log(generateParenthesis(3));
