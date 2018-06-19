/*
 https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 Time complexity : O(n)
 Space complexity : O(n)
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *  https://leetcode.com/problems/binary-tree-inorder-traversal/solution/
 * @param {TreeNode} root
 * @return {number[]}
 */

function inorderTraversal(root) {
  const result = [];
  const stack = []; //instead of a stack, we can use array
  let current = root;

  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);

      current = current.left;
    }

    current = stack.pop();
    result.push(current.val);

    current = current.right;
  }

  return result;
};
