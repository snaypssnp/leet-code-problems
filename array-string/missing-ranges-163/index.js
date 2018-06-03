/*
 https://leetcode.com/problems/missing-ranges/description/

 Solution:

 O(n) runtime
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
function findMissingRanges (nums, lower, upper) {
  const ranges = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    const current = i === nums.length ? upper + 1 : nums[i];

    if (current - prev >= 2) {
      ranges.push(getRange(prev + 1, current - 1));
    }

    prev = current;
  }

  return ranges;
};

function getRange(from, to) {
  if (from === to) {
    return String(from);
  }

  return `${from}->${to}`;
}

console.log(findMissingRanges([0, 1, 3, 50, 75, 98], 0, 99));
