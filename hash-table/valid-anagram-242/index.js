/*
 https://leetcode.com/problems/valid-anagram/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash = {};

  for (let char of s ) {
    hash[char] = hash[char] ? hash[char] + 1: 1;
  }

  for (let char of t) {
    if (!hash[char]) {
      return false;
    }

    hash[char]--;
  }

  return true;
};

console.log(isAnagram('rat', 'car'));