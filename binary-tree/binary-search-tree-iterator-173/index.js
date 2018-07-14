/*
 https://leetcode.com/problems/binary-search-tree-iterator/description/
 */
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
class BSTIterator {
  constructor(root) {
    this.stack = [];

    this._push(root);
  }

  hasNext() {
    return this.stack[this.stack.length - 1];
  }

  next() {
    const node = this.stack.pop();

    this._push(node.right);

    return node.val;
  }

  _push(node) {
    while (node) {
      this.stack.push(node);

      node = node.left;
    }
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */