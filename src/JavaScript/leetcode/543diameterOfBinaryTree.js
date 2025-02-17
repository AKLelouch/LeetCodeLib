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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  const depth = node => {
    if (!node) return 0;
    let l = depth(node.left);
    let r = depth(node.right);
    ans = Math.max(ans, l + r + 1);
    return Math.max(l + 1, r + 1);
  };
  depth(root);
  return ans;
};

export { diameterOfBinaryTree };
