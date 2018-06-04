/*
 O(n) runtime, O(1) space

 https://leetcode.com/problems/one-edit-distance/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isOneEditDistance(s, t) {
  const m = s.length; // length of substring
  const n = t.length; // length of string

  if (m > n) {
    return isOneEditDistance(t, s);
  }

  if (n - m > 1) {
    return false;
  }

  let i = 0;
  let shift = n - m;

  while (m > i && s[i] === t[i]) {
    i++;
  }

  if (shift == 0) {
    i++;
  }

  while (m > i && s[i] === t[i + shift]) {
    i++;
  }

  return m === i;
};

console.log(isOneEditDistance("c", "c"));
console.log(isOneEditDistance("cab", "ad"));
console.log(isOneEditDistance("1203", "1213"));
