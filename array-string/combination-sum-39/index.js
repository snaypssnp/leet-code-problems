/**
 * https://leetcode.com/problems/combination-sum/description/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
  const result = [];

  _sum(result, nums, target);

  return result;
};

function _sum(result, nums, target, sub = [], start = 0) {
  if (target === 0) {
    result.push(sub);
  }

  if (target < 0) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    let num = nums[i];

    _sum(result, nums, target - num, [...sub, num], i);
  }
}