/**
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const set = new Set();
  const result = new Set();

  for (let num of nums1) {
    set.add(num);
  }

  for (let num of nums2) {
    if (set.has(num)) {
      result.add(num);
    }
  }

  return [...result];
};
