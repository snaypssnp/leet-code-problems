/**
 * https://leetcode.com/problems/remove-element/description/
 *
 * Solution time O(n), space O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];

      j++;
    }
  }

  nums.length = j;

  return j;
};

console.log(removeElement([1,2,3,4, 2, 2], 2));