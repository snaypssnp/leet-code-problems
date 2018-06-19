/*
 https://leetcode.com/problems/length-of-last-word/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  s = s.trim();

  return s.length - s.lastIndexOf(' ') - 1;
};

console.log(lengthOfLastWord("Hello World"));
