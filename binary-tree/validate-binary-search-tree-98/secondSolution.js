/*
 https://leetcode.com/problems/validate-binary-search-tree/description/

 O(n) runtime, O(n) stack space
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
function isValidBST(node) {
  return valid(node, -Infinity, Infinity);
};

function valid(node, min, max) {
  if (node === null) {
    return true;
  }

  return node.val > min
  && node.val < max
  && valid(node.left, min, node.val)
  && valid(node.right, node.val, max);
}

console.log(isValidBST(root));
