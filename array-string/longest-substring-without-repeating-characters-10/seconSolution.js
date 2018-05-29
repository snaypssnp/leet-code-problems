/*
 https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

 Solution:

 O(n) runtime, O(n) space
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
  let max = 0;
  let j = 0;
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in hash && hash[char] >= j) {
      j = hash[char] + 1;
    }

    max = Math.max(max, i - j + 1);

    hash[char] = i;
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));