class MyStack {
  constructor() {
    this._queue1 = []; // we use array as queue, but it's bad because shift() - O(N);
    this._queue2 = [];
  }
  push(val) {
    while (this._queue1.length !== 0) {
      this._queue2.push(this._queue1.shift());
    }

    this._queue1.push(val);

    while (this._queue2.length !== 0) {
      this._queue1.push(this._queue2.shift());
    }
  }
  pop() {
    return this._queue1.shift();
  }

  top() {
    return this._queue1[0];
  }

  empty() {
    return this._queue1.length === 0;
  }
}
