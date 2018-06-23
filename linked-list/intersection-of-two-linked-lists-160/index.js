/*
 https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getIntersectionNode(headA, headB) {
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  while (lenA > lenB) {
    headA = headA.next;
    lenA--;
  }

  while (lenB > lenA) {
    headB = headB.next;
    lenB--;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

function getLength(head) {
  let len = 0;

  while (head !== null) {
    len++;
    head = head.next
  }

  return len;
}
