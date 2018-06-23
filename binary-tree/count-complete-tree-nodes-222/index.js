/*
 https://leetcode.com/problems/count-complete-tree-nodes/description/
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
function countNodes(root) {
  const deepLeft = getDeepLeft(root);
  const deepRight = getDeepRight(root);

  if (deepLeft === deepRight) {
    return (1 << deepLeft) - 1;
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
};

function getDeepLeft(node) {
  let count = 0;

  while (node !== null) {
    node = node.left;
    count++
  }

  return count;
}

function getDeepRight(node) {
  let count = 0;

  while (node !== null) {
    node = node.right;
    count++
  }

  return count;
}