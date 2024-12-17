class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const head = new ListNode(1);
let p = head;
for (let i = 2; i <= 4; i++) {
  p.next = new ListNode(i);
  p = p.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

  let p = head;
  let q = head && head.next ? head.next : null;

  if (p === null || q === null) return head;

  let h = head.next;
  let childHead = { val: 1, next: p };
  while (true) {
    childHead.next = childHead.next.next;
    p.next = q.next;
    q.next = p;
    childHead = childHead.next.next;

    let tmp = q;
    q = p;
    p = tmp;

    if (q.next && q.next.next) {
      q = q.next.next;
    } else {
      break;
    }
    p = p.next.next;

  }
  return h;
};

swapPairs(head);