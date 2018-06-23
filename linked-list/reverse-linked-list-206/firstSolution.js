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
function reverseList(head) {
  let prev = null;

  while (head !== null) {
    const next = head.next;

    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
