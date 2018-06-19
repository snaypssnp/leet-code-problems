/*
 https://leetcode.com/problems/add-binary/description/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a[i--]);
    }

    if (j >= 0) {
      sum += parseInt(b[j--]);
    }

    result = sum % 2 + result;

    carry  = Math.floor(sum/2);
  }

  if (carry !== 0) {
    result = carry + result;
  }

  return result;
};

console.log(addBinary('11', '11'));