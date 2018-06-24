const Node = require('./Node');

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this._tail !== null) {
      this._tail.prev = node;
    }

    this._tail = node;

    if (this._head === null) {
      this._head = this._tail;
    }

    this._size++;
  }

  pop() {
    if (this._head === null) {
      return null;
    }

    this._head = this._head.prev;

    if (this._head === null) {
      this._tail = null;
    }

    this._size--;
  }

  peak() {
    if (this._head === null) {
      return null;
    }

    return this._head.value
  }

  isEmpty() {
    return this._head === null;
  }

  getSize() {
    return this._size;
  }
}

module.exports = Queue;