/**
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSubtree(s, t) {
  const str1 = preOrder(s);
  const str2 = preOrder(t);

  return str1.includes(str2);
};


function preOrder(node) {
  if (node === null) {
    return '/nil';
  }

  return '/' + node.val + preOrder(node.left) + preOrder(node.right);
}