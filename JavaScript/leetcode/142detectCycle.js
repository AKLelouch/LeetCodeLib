/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;

  let fast = head;
  let slow = head;
  while (true) {

    if (!fast) return null;
    if (!fast.next) return null;
    if (!fast.next.next) return null;

    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      break;
    }
  }

  let p = head;
  while (p !== slow) {
    p = p.next;
    slow = slow.next;
  }
  return p;
};