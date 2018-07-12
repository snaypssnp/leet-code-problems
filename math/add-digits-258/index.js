/*
 https://leetcode.com/problems/add-digits/description/
 */
/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  return num && (num % 9 || 9);
};