/*
 Solution:

 O(n) runtime, O(1) space
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  s = s.replace(/\W/g, '').toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    if (s[i] != s[j]) {
      return false;
    }

    i++; j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panamaa"));
