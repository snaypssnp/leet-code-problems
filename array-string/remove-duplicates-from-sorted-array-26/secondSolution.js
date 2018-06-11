/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
 *
 * Solution time O(n), space O(1)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
  }

  nums.length = j + 1;

  return nums.length;
}

console.log(removeDuplicates([1,1,2,2,3,3,4,4,4]));
