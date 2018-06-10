/*
 https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

 O(n) runtime, O(log n) stack space
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  return _sortedArrayToBST(nums, 0, nums.length - 1);
}

function _sortedArrayToBST(nums, start, end) {
  if (start > end) {
    return null;
  }

  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(nums[mid]);

  node.left = _sortedArrayToBST(nums, start, mid - 1);
  node.right = _sortedArrayToBST(nums, mid + 1, end);

  return node;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
