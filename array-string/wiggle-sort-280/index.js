/**
 * https://leetcode.com/problems/wiggle-sort/description/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0 && nums[i] > nums[i+1]) {
      swap(nums, i, i+1);
    } else if (i % 2 === 1 && nums[i] < nums[i+1]) {
      swap(nums, i, i+1);
    }
  }
};

function swap(nums, index1, index2) {
  const tmp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = tmp;
}
