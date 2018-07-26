/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(node, n1, n2) {
  if (node === null) {
    return null;
  }

  if (node === n1 || node === n2) {
    return node;
  }

  const left = lowestCommonAncestor(root.left, n1, n2);
  const right = lowestCommonAncestor(root.right, n1, n2);

  if (left !== null && right !== null) {
    return node;
  }

  return left || right;
};