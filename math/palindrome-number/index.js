/*
 https://leetcode.com/problems/palindrome-number/description/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(num) {
  if (num < 0) {
    return false;
  }

  let div = 1;

  while (num / div > 10) {
    div *= 10;
  }

  while (num != 0) {
    let left = Math.floor(num / div);
    let right = num % 10;

    if (left !== right) {
      return false;
    }

    num = Math.floor((num % div) / 10);
    div /= 100;
  }

  return true;
};


console.log(isPalindrome(122));