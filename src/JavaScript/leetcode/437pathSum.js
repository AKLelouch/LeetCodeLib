/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  const dfs = (node, target) => {
    let ret = 0;
    if (!node) return 0;
    if (node.val === target) {
      ret++;
    }
    ret += dfs(node.left, target - node.val);
    ret += dfs(node.right, target - node.val);
    return ret;
  };
  let ret = dfs(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);

  return ret;
};

export { pathSum };
