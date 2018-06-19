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

  for (let str of strs) {
    const word = str.split('').sort().join();

    if (!hash.has(word)) {
      hash.set(word, []);
    }

    hash.get(word).push(str);
  }

  return [...hash.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
