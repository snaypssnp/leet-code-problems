/**
 * https://leetcode.com/problems/combination-sum-iii/description/
 * 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];

  _sum(result, k, n);

  return result;
};

function _sum(result, k, n, sub = [], start = 1, sum = 0) {
  if (sub.length === k) {
    if (sum === n) {
      result.push(sub);
    }

    return;
  }

  for (let i = start; i < 10; i++) {
    _sum(result, k, n, [...sub, i], i + 1, sum + i);
  }
}