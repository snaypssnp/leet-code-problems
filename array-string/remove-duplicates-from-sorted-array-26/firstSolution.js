/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
 *
 * this solution is bad, because splice 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }

  }
  return nums;
}

console.log(removeDuplicates([1,1,2]));