/*
 https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

 O(n) runtime, O(log n) space
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(node) {
  if (node === null) {
    return 0;
  }

  if (node.left === null) {
    return minDepth(node.right) + 1;
  }

  if (node.right === null) {
    return minDepth(node.left) + 1;
  }

  return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
};