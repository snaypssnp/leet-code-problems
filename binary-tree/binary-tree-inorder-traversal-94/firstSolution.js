/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 * 
 * The time complexity is O(n)
 * The space complexity is O(log n)
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1);

root.right = new TreeNode(2);

root.right.left = new TreeNode(3);

function inorderTraversal(root) {
  const result = [];

  inOrder(root, result);

  return result;
};


function inOrder(node, result) {
  if (node.left !== null) {
    inOrder(node.left, result);
  }

  result.push(node.val);

  if (node.right !== null) {
    inOrder(node.right, result);
  }
}


console.log(inorderTraversal(root));