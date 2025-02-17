/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  const dfs = node => {
    if (!node) {
      return false;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);
    if ((l && r) || ((node.val === p.val || node.val === q.val) && (l || r))) {
      ans = node;
    }
    if (p.val === node.val || q.val === node.val || l || r) {
      return true;
    } else {
      return false;
    }
  };
  dfs(root);
  return ans;
};

export { lowestCommonAncestor };
