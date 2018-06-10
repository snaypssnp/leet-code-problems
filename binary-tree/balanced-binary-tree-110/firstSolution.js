/*
  O(n^2) runtime, O(n) stack space
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
 * @return {boolean}
 */

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
    && isBalanced(root.left)
    && isBalanced(root.right);
};

function maxDepth(node) {
  if (node === null) {
    return 0;
  }

  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
