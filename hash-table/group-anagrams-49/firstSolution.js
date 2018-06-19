/*
 https://leetcode.com/problems/group-anagrams/description/

 n - strs length, m - max word length
 Time Complexity: O(m * n * log n)
 Space Complexity: O(m * n)
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams (strs) {
  const hash = new Map();

  for (let i = 0, j = 0; i < strs.length; i++) {
    const word = strs[i].split('').sort().join();

    if (!hash.has(word)) {
      hash.set(word, []);
    }

    hash.get(word).push(strs[i]);
  }

  return [...hash.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
