/*
 https://leetcode.com/problems/merge-two-sorted-lists/description/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function mergeTwoLists(l1, l2) {
  const result = new ListNode();
  let p = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1 !== null) {
    p.next = l1;
  }

  if (l2 !== null) {
    p.next = l2;
  }

  return result.next;
};
