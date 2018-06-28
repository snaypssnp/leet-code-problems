const Stack  = require('../Stack');

/*
 * Задача 3
 * Напишите программу, которая реализует три стека используя один массив. У нее
 * должны быть реализованы следующие методы:
 * • push(int stackIndex, value)
 * • pop(int stackIndex)
 * • peek(int stackIndex)
 * • isEmpty(int stackIndex) CRONIS
 */
class StackList {
  constructor() {
    this._stacks = [
      new Stack(),
      new Stack(),
      new Stack(),
    ];
  }

  push(stackIndex, val) {
    return this._getStack(stackIndex).push(val);
  }

  pop(stackIndex) {
    return this._getStack(stackIndex).pop();
  }

  peek(stackIndex) {
    return this._getStack(stackIndex).peek();
  }

  isEmpty(stackIndex) {
    return this._getStack(stackIndex).isEmpty();
  }

  _getStack(stackIndex) {
    if (!this._stacks[index]) {
      throw new Error(`stack with index "${stackIndex}" was not found`);
    }

    return this._stacks[index];
  }
}

const stacks = new StackList();

