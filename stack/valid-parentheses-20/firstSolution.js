/*
 https://leetcode.com/problems/valid-parentheses/description/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  const hash = {")": "(", "]": "[", "}": "{"};
  const stack = []; // Instead of a stack, we use an array

  for (let char of str) {
    if (!hash[char]) {
      stack.push(char);

      continue;
    }

    if (hash[char] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('{[]}'));