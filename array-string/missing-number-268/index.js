/*
  Solution: time O(n), space O (1);

  https://leetcode.com/problems/missing-number/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const expectedSum = nums.length * (nums.length + 1) / 2;
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return expectedSum - sum;
};

console.log(missingNumber([1]));
