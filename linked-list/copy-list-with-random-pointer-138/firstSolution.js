/*
 Solution: O(n) runtime, O(n) space – Hash table

 https://leetcode.com/problems/copy-list-with-random-pointer/description/
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
function copyRandomList(head) {
  const dummy = new RandomListNode(0);
  const map = new Map();
  let p = head;
  let q = dummy;

  while (p !== null) {
    q.next = new RandomListNode(p.label);

    map.set(p, q.next);

    p = p.next;
    q = q.next;
  }

  p = head;
  q = dummy;

  while (p !== null) {
    q.next.random = map.get(p.random) || null;

    p = p.next;
    q = q.next;
  }

  return dummy.next;
};

console.log(copyRandomList(head));
