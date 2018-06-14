/*
 Solution: time O(n) ;
 решение плохое, так как по условию должно быть O(log n)
 но, лучше не придумал
 
 https://leetcode.com/problems/search-for-a-range/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else  {
      right = mid;
    }
  }

  if (nums[left] !== target) {
    return [-1, -1];
  }

  let start = left;
  let end = left;

  while (nums[start - 1] === target) {
    start--;
  }

  while (nums[end + 1] === target) {
    end++;
  }

  return [start, end];
};

console.log(searchRange([5,7,7,8,8, 8,10], 8));