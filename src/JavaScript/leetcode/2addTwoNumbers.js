/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let cur = head;
  let p = l1;
  let q = l2;
  let plus = false;
  while (p || q) {
    let curNode = new ListNode();
    if (plus) {
      curNode.val += 1;
      plus = false;
    }
    if (p) curNode.val += p.val;
    if (q) curNode.val += q.val;
    if (curNode.val >= 10) {
      curNode.val -= 10;
      plus = true;
    }

    cur.next = curNode;
    cur = cur.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }
  if (plus) cur.next = new ListNode(1);
  return head.next;
};

export { addTwoNumbers };
