/*
 O(n) runtime, O(log n) space

 https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
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


function maxDepth (node) {
  if (node === null) {
    return 0;
  }

  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
};
