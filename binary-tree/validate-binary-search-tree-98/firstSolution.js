/*
  https://leetcode.com/problems/validate-binary-search-tree/description/

  worst decision

  O(n^2) runtime, O(n) stack space – Brute force
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

function isValidBST(root) {
  if (root === null) {
    return true;
  }

  return isSubtreeGreaterThan(root.right, root.val)
    && isSubtreeLessThan(root.left, root.val)
    && isValidBST(root.left)
    && isValidBST(root.right)
};

function isSubtreeGreaterThan(node, rootVal) {
  if (node === null) {
    return true;
  }

  return node.val > rootVal
    && isSubtreeGreaterThan(node.left, rootVal)
    && isSubtreeGreaterThan(node.right, rootVal);
}

function isSubtreeLessThan(node, rootVal) {
  if (node === null) {
    return true;
  }

  return node.val < rootVal
    && isSubtreeLessThan(node.left, rootVal)
    && isSubtreeLessThan(node.right, rootVal);
}
