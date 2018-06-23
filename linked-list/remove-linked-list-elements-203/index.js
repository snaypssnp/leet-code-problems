/*
 https://leetcode.com/problems/remove-linked-list-elements/description/
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
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  let faceHead = new ListNode(0);

  faceHead.next = head;

  let point = faceHead.next;

  while (point.next !== null) {
    const next = point.next;

    if (next.val === val) {
      point.next = next.next;
    } else {
      point = point.next;
    }
  }

  return faceHead.next;
};