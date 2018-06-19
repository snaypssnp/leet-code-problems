/*
 https://leetcode.com/problems/isomorphic-strings/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash1 = new Map();
  const hash2 = new Map();

  for (let i  = 0; i < s.length; i++) {
    if (hash1.has(s[i]) && hash1.get(s[i]) !== t[i]) {
      return false;
    }

    if (hash2.has(t[i]) && hash2.get(t[i]) !== s[i]) {
      return false;
    }

    hash1.set(s[i], t[i]);
    hash2.set(t[i], s[i]);
  }

  return true;
};

console.log(isIsomorphic('aa', 'ab'));
