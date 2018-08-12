/**
 * https://leetcode.com/problems/subsets/description/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];

  _subsets(nums, result, [], 0);

  return result;
};

function _subsets(nums, result, tmpList, index) {
  result.push([...tmpList]);

  for (let i = index; i < nums.length; i++) {
    tmpList.push(nums[i]);

    _subsets(nums, result, tmpList, i + 1);

    tmpList.pop();
  }
}
