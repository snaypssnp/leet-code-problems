/*
 https://leetcode.com/problems/merge-k-sorted-lists/description/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeKLists(lists) {
  if (lists.length === 0) {
    return lists;
  }

  let result = lists[0];

  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }

  return result;
};

function mergeTwoLists(l1, l2) {
  let result = new ListNode();
  let current = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;

      l1 = l1.next;
    } else {
      current.next = l2;

      l2 = l2.next;
    }

    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }

  if (l2 !== null) {
    current.next = l2;
  }

  return result.next;
}
