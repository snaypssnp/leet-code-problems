/**
 * https://leetcode.com/problems/minimum-path-sum/description/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const res = new Array(grid.length).fill([]);

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (i === grid.length - 1 && j !== grid[0].length -1) {
        res[i][j] = grid[i][j] + res[i][j + 1];
      } else if (i !== grid.length - 1 && j === grid[0].length -1) {
        res[i][j] = grid[i][j] + res[i + 1][j];
      } else if (i !== grid.length - 1 && j !== grid[0].length -1) {
        res[i][j] = grid[i][j] + Math.min(res[i + 1][j], res[i][j + 1]);
      } else {
        res[i][j] = grid[i][j];
      }
    }
  }

  return res[0][0];
};