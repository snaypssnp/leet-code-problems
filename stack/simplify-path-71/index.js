/*
 https://leetcode.com/problems/simplify-path/description/
 */
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const arr = path.split('/');
  const stack = [];

  for (let item of arr) {
    if (item === '' || item === '.') {
      continue;
    }

    if (item === '..') {
      stack.pop();

      continue;
    }

    stack.push(item);
  }

  let result = '';

  for (let item of stack) {
    result += `/${item}`;
  }

  return result || '/';
};
