/*
 https://leetcode.com/problems/valid-number/description/

 Solution:

 O(n) runtime, O(1) space
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
  let i = 0;
  let isNumeric = false;
  s = s.trim();

  if (isSign(s[i])) {
    i++;
  }

  while (isNum(s[i])) {
    i++;
    isNumeric = true;
  }

  if (s[i] === '.') {
    i++;
    while (isNum(s[i])) {
      i++;
      isNumeric = true;
    }
  }

  if (isNumeric && s[i] === 'e') {
    i++;
    isNumeric = false;

    if (isSign(s[i])) {
      i++;
    }

    while (isNum(s[i])) {
      i++;
      isNumeric = true;
    }
  }

  return isNumeric && s.length === i;
};

function isNum(n) {
  return !isNaN(parseFloat(n));
}

function isSign(char) {
  return char === '+' || char === '-';
}

console.log(isNumber("0"));
