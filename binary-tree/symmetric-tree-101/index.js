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
function isSymmetric(root) {
  return root === null || isMirror(root.right, root.left);
};

function isMirror(tree1, tree2) {
  if (tree1 === null || tree2 === null) {
    return tree1 === tree2;
  }

  if (tree1.val !== tree2.val) {
    return false;
  }

  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}