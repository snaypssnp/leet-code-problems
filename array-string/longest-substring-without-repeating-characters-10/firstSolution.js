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

  for (let i = 0; i <  s.length; i++) {
    while (hash[s[i]]) {
      hash[s[j]] = false;
      j++;
    }

    hash[s[i]] = true;

    max = Math.max(max, i - j + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abba"));