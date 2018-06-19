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
var groupAnagrams = function(strs) {
  const result = [];
  const hash = new Map();

  for (let i = 0, j = 0; i < strs.length; i++) {
    const word = strs[i].split('').sort().join();

    if (!hash.has(word)) {
      hash.set(word, j++);
      result.push([]);
    }

    const index = hash.get(word);

    result[index].push(strs[i]);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



