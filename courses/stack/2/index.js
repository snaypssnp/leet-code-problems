const Stack = require('../Stack');
/*
 * Задача 2
 * Представьте стопку тарелок. Если она будет слишком высокой, то она обрушится.
 * Для того, чтобы она не рушилась, нужно делать несколько стопок тарелок.
 * Напишите программу, которая повторяет это поведение. Другими словами: если
 * текущий стек полностью заполнен, создается новый стек и заполняется уже он.
 * При этом функции push и pop для пользователя должны себя вести так, как будто
 * это обычный стек.
 */
class MyStack {
  constructor(max) {
    this._stacks = []; // использую массив для хранения списка стеков, ограничений в задаче не было
    this._max = max; // максимальная длинна стека
    this._curStack = null; // текущий стек
    this._size = 0;
  }

  push(val) {
    if (this._curStack === null || this._curStack.size() >= this._max) {
      this._curStack = new Stack();
      this._stacks.push(this._curStack); // добавляем текущий стек в массив стеков
    }

    this._curStack.push(val);
    this._size++;
  }

  pop() {
    if (this._curStack === null) {
      return;
    }

    this._curStack.pop();
    this._size--;

    if (this._curStack.size() > 0) {
      return;
    }

    this._stacks.pop();

    if (this._stacks.length === 0) {
      this._curStack = null;

      return;
    }

    this._curStack = this._stacks[this._stacks.length - 1];
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }
}

const stack = new MyStack(2);

console.log(stack._stacks);