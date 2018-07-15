/*
 https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
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

function sumNumbers (root) {
  let sum = 0;

  if (root !== null) {
    traverse(root, '');
  }

  function traverse(node, str) {
    str += node.val;

    if (node.left !== null) {
      traverse(node.left, str);
    }

    if (node.right !== null) {
      traverse(node.right, str);
    }

    if (node.left === null && node.right === null) {
      sum += parseInt(str);
    }
  }

  return sum;
};