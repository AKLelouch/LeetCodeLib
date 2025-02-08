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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let cur = 1;
  let res = null;
  const dfs = node => {
    if (!node || res !== null) return;
    dfs(node.left);
    if (cur === k) res = node.val;
    cur++;
    dfs(node.right);
  };
  dfs(root);
  return res;
};

export { kthSmallest };
