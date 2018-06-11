/*
 https://leetcode.com/problems/pascals-triangle/description/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  const rows = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = rows[i - 1];
    const newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);

    rows.push(newRow);
  }

  return rows;
};

console.log(generate(5));
