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
function sumNumbers (root) {
  const result = [];
  let sum = 0;

  if (root !== null) {
    traverse(root, '', result);

    for (let num of result) {
      sum += +num;
    }
  }

  return sum;
};

function traverse(node, str, result) {
  str += node.val;

  if (node.left !== null) {
    traverse(node.left, str, result);
  }

  if (node.right !== null) {
    traverse(node.right, str, result);
  }

  if (node.left === null && node.right === null) {
    result.push(str);
  }
}