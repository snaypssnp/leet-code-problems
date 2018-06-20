/*
 https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const faceHead = new ListNode(0);
  faceHead.next  = head;

  let p1 = faceHead;
  let p2 = faceHead;

  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }

  while (p1.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;

  return faceHead.next ;
};
