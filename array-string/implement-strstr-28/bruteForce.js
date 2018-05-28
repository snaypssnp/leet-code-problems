/*
 Solution:

 O(nm) runtime, O(1) space – Brute force
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) {
        return i;
      }

      if (i + j === haystack.length) {
        return -1;
      }

      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
  }
};

console.log(strStr("111test1", "test"));