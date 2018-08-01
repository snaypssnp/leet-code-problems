/**
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let max = -Infinity;

  for (let num of nums) {
    sum = Math.max(sum + num, num);
    max = Math.max(sum, max);
  }

  return max;
};
