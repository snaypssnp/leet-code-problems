/*
 https://leetcode.com/problems/search-insert-position/description/

 Solution: O(log n) binarySearch
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  if (target > nums[left]) {
    return left + 1;
  }

  return left;
};

console.log(searchInsert([1, 3], 4));
