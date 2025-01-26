/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  let root = new TreeNode(preorder[0]);
  let rootIndex = inorder.findIndex(val => val === preorder[0]);
  let leftTreeCount = rootIndex;
  let rightTreeCount = inorder.length - 1 - leftTreeCount;

  let leftTreePreorder = preorder.splice(1, leftTreeCount);
  let leftTreeInorder = inorder.splice(0, leftTreeCount);

  let rightTreePreorder = preorder.splice(1, rightTreeCount);
  let rightTreeInorder = inorder.splice(1, rightTreeCount);
  root.left = buildTree(leftTreePreorder, leftTreeInorder);
  root.right = buildTree(rightTreePreorder, rightTreeInorder);
  return root;
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
