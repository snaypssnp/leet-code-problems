/*
 https://leetcode.com/problems/excel-sheet-column-title/description/
 */
/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(num) {
  let result = '';

  while (num !== 0) {
    result = getLetter(--num % 26) + result;

    num = Math.floor(num/26);
  }

  return result;
};

function getLetter(num) {
  return String.fromCharCode(65 + num);
}


console.log(convertToTitle(53));