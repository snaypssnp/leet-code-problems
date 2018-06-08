const Node = require('./Node');

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  insert(val) {
    if (this._root === null) {
      this._root = new Node(val);
    } else {
      this._insertNode(val, this._root);
    }
  }

  _insertNode(val, node) {
    if (val < node.val) {
      if (node.left !== null) {
        this._insertNode(val, node.left);
      } else {
        node.left = new Node(val);
      }

      return;
    }

    if (node.right !== null) {
      this._insertNode(val, node.right);
    } else {
      node.right = new Node(val);
    }
  }

  getMinVal() {
    if (this._root === null) {
      return null;
    }

    return this._getMin(this._root);
  }

  _getMin(node) {
    if (node.left === null) {
      return node.val;
    }

    return this._getMin(node.left);
  }

  getMaxVal() {
    if (this._root === null) {
      return null;
    }

    return this._getMax(this._root);
  }

  _getMax(node) {
    if (node.right === null) {
      return node.val;
    }

    return this._getMax(node.right);
  }

  traversal(cb) {
    if (this._root !== null) {
      this._inOrderTraversal(this._root, cb);
    }
  }

  _inOrderTraversal(node, cb) {
    if (node.left !== null) {
      this._inOrderTraversal(node.left, cb);
    }

    cb(node.val);

    if (node.right !== null) {
      this._inOrderTraversal(node.right, cb);
    }
  }

  delete(val) {
    if (this._root !== null) {
      root = this._deleteNode(this._root, val);
    }
  }

  _deleteNode(node, val) {
    if (node === null) {
      return node;
    }

    if (val < node.val) {
      node.left = this._deleteNode(node.left, val);
    } else if (val > node.val) {
      node.right = this._deleteNode(node.right, val);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const tempNode = this._getPredecessor(node.left);

      node.val = tempNode.val;
      node.left = this._deleteNode(node.left, tempNode.val)
    }

    return node;
  }

  _getPredecessor(node) {
    if (node.right === null) {
      return node;
    }

    return this._getPredecessor(node);
  }
}

module.exports = BinarySearchTree;
