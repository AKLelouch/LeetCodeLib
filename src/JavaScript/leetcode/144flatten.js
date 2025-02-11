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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let cur = root;
  if (!cur) return [];
  let stack = [];
  stack.push(cur);
  let pre = null;
  while (stack.length) {
    cur = stack.pop();
    if (pre) {
      pre.left = null;
      pre.right = cur;
    }
    pre = cur;
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }

  return cur;
};

var useO1 = function (root) {
  let cur = root;
  while (cur) {
    if (cur.left) {
      let next = cur.left;
      let pre = cur.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = cur.right;
      cur.left = null;
      cur.right = next;
    }
    cur = cur.right;
  }
  return root;
};

export { flatten, useO1 };
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
