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
 * @return {number[]}
 */
var postorderTraversalIteration = function (root) {
  if (!root) return [];
  let node = root;
  let res = [];
  let stack = [];
  stack.push(node);
  while (stack.length) {
    node = stack.pop();
    res.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return res;
};

export { postorderTraversalIteration };
