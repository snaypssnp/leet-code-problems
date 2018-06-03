/*
 https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/

 Solution:

 O(n) runtime, O(n) space
 */

function lengthOfLongestSubstringKDistinct (s, k) {
  const hash = {};
  let distinct = 0;
  let max = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    const char  = s[i];

    if (!hash[char]) {
      hash[char] = 0;
      distinct++;
    }

    hash[char]++;

    while (distinct > k) {
      hash[s[j]]--;

      if (hash[s[j]] === 0) {
        distinct--;
      }

      j++;
    }

    max = Math.max(max, i - j + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstringKDistinct("abaac", 2));
