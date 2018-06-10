/*
 https://leetcode.com/problems/balanced-binary-tree/description/

  O(n^2) runtime, O(H) stack space; H - height of tree
  stack space can be O(n) if it is something like linkedList
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
  return maxDepth(root) !== -1;
};

function maxDepth(node) {
  if (node === null) {
    return 0
  }

  const left = maxDepth(node.left);

  if (left === -1) {
    return -1;
  }

  const right = maxDepth(node.right);

  if (right === -1) {
    return -1;
  }

  return Math.abs(left - right) <=1 ? Math.max(left, right) + 1 : -1;
}
