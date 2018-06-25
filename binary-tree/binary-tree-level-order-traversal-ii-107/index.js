/*
 https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
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
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  const list = [];

  traverse(root, list, 0);

  return list;
};

function traverse(node, list, level) {
  if (node === null) {
    return;
  }

  if (level >= list.length) {
    list.unshift([]);
  }

  traverse(node.left, list, level + 1);
  traverse(node.right, list, level + 1);

  list[list.length - level - 1].push(node.val);
}
