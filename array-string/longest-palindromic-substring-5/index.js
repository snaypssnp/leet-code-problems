/*
 https://leetcode.com/problems/longest-palindromic-substring/description/

 O(n2) runtime, O(1) space
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(str) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);
    let len = Math.max(len1, len2);

    if (len - 1 > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.substring(start, end + 1);
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

console.log(longestPalindrome("cbbd"));
