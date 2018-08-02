/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 * 
 * Solution: Time O(n); Space O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const res = [];

  for (const num of nums) {
    const index = Math.abs(num) - 1;

    if (nums[index] < 0) {
      res.push(index + 1);
    }

    nums[index] = -nums[index];
  }

  return res;
};
