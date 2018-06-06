/*
 https://leetcode.com/problems/reverse-integer/description/
 */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(num) {
  let result = 0;
  let sign = num < 0 ? -1 : 1;

  num = Math.abs(num);

  while (num != 0) {
    result = result * 10 + num % 10;

    num = Math.floor(num / 10);
  }

  return result * sign;
};

console.log(reverse(1534236469));
