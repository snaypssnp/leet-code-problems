/*
 https://leetcode.com/problems/minimum-size-subarray-sum/description/

 Solution: time O(n), space O(1)
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      min = Math.min(min, i - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
