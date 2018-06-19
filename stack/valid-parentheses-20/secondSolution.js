/*
 https://leetcode.com/problems/valid-parentheses/description/
 Solution without space for hash table;
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(str) {
  const stack = []; // Instead of a stack, we use an array

  for (let char of str) {
    if (char === '(') {
      stack.push(')');
    } else if (char === '[') {
      stack.push(']');
    } else if (char === '{') {
      stack.push('}');
    } else if (char !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('{}'));