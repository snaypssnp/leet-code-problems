/*
 https://leetcode.com/problems/swap-nodes-in-pairs/description/
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
 * @return {ListNode}
 */
function swapPairs(head) {
  const result = new ListNode(0);
  result.next = head;

  let prev = result;
  let p = head;

  while (p !== null && p.next != null) {
    const next = p.next;
    const nextNext = p.next.next;

    prev.next = next;

    next.next = p;
    p.next = nextNext;

    prev = p;
    p = nextNext;
  }

  return result.next;
};
