/*
 https://leetcode.com/problems/add-two-numbers/description/
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

function addTwoNumbers(l1, l2) {
  const result = new ListNode();
  let currentNode = result;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const digit = val1 + val2 + carry;

    currentNode.next = new ListNode(digit % 10);
    currentNode = currentNode.next;

    carry = Math.floor(digit / 10);

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry) {
    currentNode.next = new ListNode(carry);
  }

  return result.next;
};
