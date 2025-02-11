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
var rightSideView = function (root) {
  let stack = [];
  let res = [];
  if (!root) return [];
  stack.push(root);

  while (stack.length) {
    let curLevelCount = stack.length;
    let curLevelNodeValue = null;
    while (curLevelCount) {
      let curNode = stack.shift();
      curLevelNodeValue = curNode.val;
      if (curNode.left) stack.push(curNode.left);
      if (curNode.right) stack.push(curNode.right);
      curLevelCount--;
    }
    res.push(curLevelNodeValue);
  }
  return res;
};

export { rightSideView };
