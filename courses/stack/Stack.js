'use strict';
// Simple Stack
class Stack {
  constructor() {
    this._stack = [];
  }

  push(val) {
    return this._stack.push(val);
  }

  pop() {
    return this._stack.pop();
  }

  peak() {
    return this._stack[this._stack.length - 1];
  }

  size() {
    return this._stack.length;
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  print() {
    console.log(this._stack);
  }
}

module.exports = Stack;