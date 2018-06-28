const Stack = require('../Stack');
/**
 * Задача 1
 * Напишите программу, которая сортирует по возрастанию, то есть наименьший
 * элемент будет находится на вершине стека, наибольше на дне. Можно
 * использовать только один дополнительный стек для сортировки исходного стека.
 * Нельзя использовать массив или другие структуры данных.
 * @param stack
 * @returns {Stack}
 */
function sortStack(stack) {
  const stack2 = new Stack();

  while (!stack.isEmpty()) {
    const cur = stack.pop();

    while (!stack2.isEmpty() && cur < stack2.peak()) {
      stack.push(stack2.pop());
    }

    stack2.push(cur);
  }

  while (!stack2.isEmpty()) {
    stack.push(stack2.pop());
  }

  return stack;
}
