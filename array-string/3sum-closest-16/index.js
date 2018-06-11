/*
  https://leetcode.com/problems/3sum-closest/description/

  Solution: time O(n^2), space O(1);
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  let result = nums[0] + nums[1] + nums[2];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];

      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }

      if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }

  return result;
};


console.log(threeSumClosest([4,3,2,1,6,5], 10.5));