/*
 https://leetcode.com/problems/min-stack/description/
 */

class MinStack {
  constructor() {
    this._stack = [];
    this._minStack = [];
  }

  push(v) {
    this._stack.push(v);
    const len = this._minStack.length;

    if (len === 0 || this._minStack[len - 1] >= v) {
      this._minStack.push(v);
    }
  }

  pop() {
    const v = this._stack.pop();

    if (v === this._minStack[this._minStack.length - 1]) {
      this._minStack.pop();
    }
  }

  top() {
    return this._stack[this._stack.length - 1];
  }

  getMin() {
    return this._minStack[this._minStack.length - 1];
  }
}

const stack = new MinStack();

stack.push(-2);
stack.push(0);

stack.push(-3);

stack.pop();

console.log(stack.getMin());

console.log(stack.top());

