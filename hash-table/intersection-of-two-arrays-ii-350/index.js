/*
 https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const hash = {};
  const result = [];

  for (let num of nums1) {
    hash[num] = hash[num] ? hash[num] + 1 : 1;
  }

  for (let num of nums2) {
    if (hash[num]) {
      result.push(num);
      hash[num]--;
    }
  }

  return result;
};

console.log(intersect([1, 1, 1], [1, 1]));