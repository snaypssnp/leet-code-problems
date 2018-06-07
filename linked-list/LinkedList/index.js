const Node = require('./Node');

class LinkedList {
  constructor() {
    this._root = null;
    this._size = 0;
  }

  insert(data) {
    if (this._root === null) {
      this._root = new Node(data);
    } else {
      this._insertNode(data, this._root);
    }

    this._size++;
  }

  _insertNode(data, parentNode) {
    if (parentNode.nextNode === null) {
      parentNode.nextNode = new Node(data);
    } else {
      this._insertNode(data, parentNode.nextNode);
    }
  }

  remove(data) {
    if (this._root === null) {
      return;
    }

    if (this._root.data === data) {
      this._root = this._root.nextNode;
    } else {
      this._removeNode(data, this._root, this._root.nextNode);
    }

    this._size--;
  }

  _removeNode(data, prevNode, currentNode) {
    while (currentNode !== null) {
      if (currentNode.data = data) {
        prevNode.nextNode = currentNode.nextNode;

        return;
      }

      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
  }

  traverse(cb) {
    if (this._root === null) {
      return;
    }

    let currentNode = this._root;

    while (currentNode !== null) {
      cb(currentNode.data);

      currentNode = currentNode.nextNode;
    }
  }

  get size() {
    return this._size;
  }

  print() {
    console.log(this._root);
  }
}

module.exports = LinkedList;
