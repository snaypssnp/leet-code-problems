/*
 https://leetcode.com/problems/unique-paths/description/
 
 Solution: O(n * m);
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  let arr = [];

  for (let i = 0; i < m; i++) {
    arr[i] = [1];
  }

  for (let j = 0; j < n; j++) {
    arr[0][j] = 1;
  }

  console.log(arr);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1];
};
