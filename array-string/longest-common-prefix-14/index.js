/*
 https://leetcode.com/problems/longest-common-prefix/description/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let result = '';

  if (strs.length === 0) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return result;
      }
    }

    result += char;
  }

  return result;
};
