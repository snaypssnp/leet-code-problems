/*
 https://leetcode.com/problems/majority-element/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const hash = {};
  let majority;
  let count = 0;

  for (let num of nums) {
    hash[num] = hash[num] ? hash[num] + 1 : 1;

    if (hash[num] > count) {
      majority = num;
      count = hash[num];
    }
  }

  return majority;
};
