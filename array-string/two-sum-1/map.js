'use strict';
/*
 Solution:

 O(n) runtime, O(n) space
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if ((target - num) in map) {
      return [map[target - num], i];
    }

    map[num] = i;
  }
};

console.log(twoSum([1, 7, 11, 15], 7));
