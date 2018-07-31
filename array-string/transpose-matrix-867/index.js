/**
 * https://leetcode.com/problems/transpose-matrix/description/
 * 
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j] = result[j] || [];

      result[j].push(arr[i][j]);
    }
  }

  return result;
};