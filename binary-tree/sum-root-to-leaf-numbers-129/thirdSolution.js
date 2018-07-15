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
function sumNumbers(root) {
  return traverse(root, 0);
};

function traverse(node, sum) {
  if (node === null) {
    return 0;
  }

  const res = sum * 10 + node.val;

  if (node.left === null && node.right === null) {
    return res;
  }

  return traverse(node.left, res) + traverse(node.right, res);
}
