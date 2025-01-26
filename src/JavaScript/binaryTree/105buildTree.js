/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {
//   let root;
//   const build = (root, childPreorder, childInorder) => {
//     if (!childPreorder.length || !childInorder.length) {
//       return;
//     }
//     root = new TreeNode(childPreorder[0]);
//     let rootIndexInChildInorder = childInorder.find(val => val === root);
//     let [leftInorderChildTree, rightInorderChildTree] = spliceArray(childInorder, rootIndexInChildInorder);
//     childPreorder.unshift();
//     let leftPreorderChildTree = childPreorder.splice()

//     build();
//   };

//   build(root, preorder, inorder);
// };

// const spliceArray = (arr, index) => {
//   let left = [];
//   let right = [];
//   arr.forEach((element, i) => {
//     if (index < i) {
//       left.push(element);
//     } else if (index > i) {
//       right.push(element);
//     }
//   });
//   return [left, right];
// };
