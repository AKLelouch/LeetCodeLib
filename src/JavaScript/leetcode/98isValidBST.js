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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let res = true;
  let pre = null;
  const dfs = node => {
    if (!node || !res) return;
    dfs(node.left);
    if (typeof pre === 'number' && node.val < pre) {
      res = false;
    }
    pre = node.val;
    dfs(node.right);
  };

  dfs(root);

  return res;
};

export { isValidBST };
