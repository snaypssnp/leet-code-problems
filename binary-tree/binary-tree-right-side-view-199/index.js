/*
 https://leetcode.com/problems/binary-tree-right-side-view/description/
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
function rightSideView(root) {
  const stackNode = [root];
  const stackDepth = [0];
  const map = new Map();

  while (stackNode.length > 0) {
    const node = stackNode.pop();
    const depth = stackDepth.pop();

    if (!node) {
      continue;
    }

    if (!map.has(depth)) {
      map.set(depth, node.val);
    }

    stackNode.push(node.left, node.right);
    stackDepth.push(depth + 1, depth + 1);
  }

  return map.values();
};
