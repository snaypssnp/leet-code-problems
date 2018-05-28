/*
 https://leetcode.com/problems/reverse-words-in-a-string/description/
 
Solution:

O(n) runtime, O(n) space
 */

/**
 * @param {string} str
 * @returns {string}
 */
function reverseWords(str) {
  let reversed = "";
  let j = str.length;

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i);
    if (str[i] === " ") {

      j = i;
    } else if (i === 0  || str[i - 1] === " ") {
      if (reversed.length !== 0) {
        reversed += " ";
      }
      reversed += str.substring(i, j);
    }
  }

  return reversed;
};


console.log(reverseWords("the sky is blue"));


