/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(inOrder = [], postOrder = []) {
  if (inOrder.length !== postOrder.length) {
    return null;
  }

  const hm = {};

  for (let i = 0; i < inOrder.length; i++) {
    hm[inOrder[i]] = i;
  }

  return buildTreePostIn(
    inOrder, 0, inOrder.length - 1,
    postOrder, 0, postOrder.length - 1,
    hm,
  );
};

let i = 0;
function buildTreePostIn(inOrder, inStart, inEnd, postOrder, postStart, postEnd, hm) {
  if (inStart > inEnd || postStart > postEnd) {
    return null;
  }

  const root = new TreeNode(postOrder[postEnd]);
  const rootIndex = hm[postOrder[postEnd]];

  root.left = buildTreePostIn(
    inOrder, inStart, rootIndex - 1,
    postOrder, postStart, postStart + rootIndex - inStart - 1,
    hm,
  );

  root.right = buildTreePostIn(
    inOrder, rootIndex + 1, inEnd,
    postOrder, postStart + rootIndex - inStart, postEnd - 1,
    hm
  );

  return root;
}

console.log(buildTree([3, 9, 20], [3, 20, 9]));
