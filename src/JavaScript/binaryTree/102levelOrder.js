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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let orderQue = [];
  orderQue.push(root);
  let result = [];
  while (orderQue.length) {
    let curLevelNode = [];
    let currentLevelCount = orderQue.length;
    for (let i = 0; i < currentLevelCount; i++) {
      const node = orderQue.shift();
      if (node.left) {
        orderQue.push(node.left);
      }
      if (node.right) {
        orderQue.push(node.right);
      }
      curLevelNode.push(node.val);
    }
    result.push(curLevelNode);
  }
  return result;
};

export { levelOrder };
