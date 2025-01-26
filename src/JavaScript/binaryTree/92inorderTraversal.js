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
var inorderTraversalIteration = function (root) {
  let res = [];
  let stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    res.push(node.val);

    node = node.right;
  }

  return res;
};

var inorderTraversalRecursion = function (root) {
  let res = [];
  const recur = node => {
    if (node.left) recur(node.left);
    res.push(node.val);
    if (node.right) recur(node.right);

    return node.val;
  };

  root && recur(root);
  return res;
};

export { inorderTraversalIteration, inorderTraversalRecursion };
// console.log(inorderTraversalIteration)
