/*
 https://leetcode.com/problems/binary-tree-preorder-traversal/description/
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
 * @return {number[]}
 */
function preorderTraversal(root) {
  const numbers = [];

  if (root !== null) {
    preorder(root, numbers);
  }

  return numbers;
};

function preorder(node, numbers) {
  numbers.push(node.val);

  if (node.left !== null) {
    preorder(node.left, numbers);
  }

  if (node.right !== null) {
    preorder(node.right, numbers);
  }
}