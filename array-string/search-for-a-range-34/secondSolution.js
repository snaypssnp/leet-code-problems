/*
 Solution: time O(log n) ;
 https://leetcode.com/problems/search-for-a-range/description/
 */

/*
это решение за log n точнее за 2 log n - но понятно что константы мы не учитываем

 */

/**
 * use binary search two times for upper and lower bound.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  const result = [-1, -1];

  // we find lower bound
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right  = mid;
    }
  }

  if (nums[left] !== target) {
    return result;
  }

  result[0] = left;

  right = nums.length - 1;

  // we find upper bound
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left  = mid;
    }
  }

  result[1] = left;

  return result;
}

console.log(searchRange([5, 5, 8, 8, 8, 10, 10], 8));
