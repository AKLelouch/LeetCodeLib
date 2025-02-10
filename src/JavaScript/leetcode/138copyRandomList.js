/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
// Definition for a _Node.
function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  let origin = head;
  let res = new _Node();
  let curNode = res;
  // res.next = curNode;
  let map = new Map();
  while (origin) {
    map.set(origin, new _Node(origin.val));
    origin = origin.next;
  }
  origin = head;
  while (origin) {
    let node = map.get(origin);
    node.next = map.has(origin.next) ? map.get(origin.next) : null;
    node.random = map.has(origin.random) ? map.get(origin.random) : null;
    curNode.next = node;
    curNode = curNode.next;
    origin = origin.next;
  }
  return res.next;
};

export { copyRandomList };
