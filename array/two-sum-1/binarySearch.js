/*
 Array is already sorted

 Solution:

 O(n log n) runtime, O(1) space
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const j = binarySearch(nums, target - num, i + 1);

    if (j != -1) {
      return [i, j];
    }
  }
};

function binarySearch(nums, key, start) {
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < key) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left] === key ? left : -1;
}

console.log(twoSum([1, 3, 9, 13, 16], 16));
