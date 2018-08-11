/**
 * https://leetcode.com/problems/array-nesting/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
function arrayNesting(nums) {
  const set = new Set();
  let max = 0;

  for (let i  = 0; i < nums.length; i++) {
    if (set.has(i)) {
      break;
    }

    let j = nums[i];
    let count = 0;

    do {
      j = nums[j];
      count++;
      set.add(j);
    } while (j !== nums[i]);

    max = Math.max(count, max)
  }

  return max;
};