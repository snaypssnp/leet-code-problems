class Node {
  constructor(data) {
    this._data = data;
    this._nextNode = null;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(nextNode) {
    this._nextNode = nextNode;
  }

  toString() {
    return this._data;
  }
}

module.exports = Node;
