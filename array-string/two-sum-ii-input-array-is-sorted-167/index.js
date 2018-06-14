/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * solution: time O(n) space O(1)
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }

  return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9));