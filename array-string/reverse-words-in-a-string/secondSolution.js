/*
 https://leetcode.com/problems/reverse-words-in-a-string/description/

 Solution: without allocating extra space

 O(n) runtime, O(1) space
 */

/**
 * @param {string} str
 * @returns {string}
 */
function reverseWords([...arr]) {
  reverse(arr, 0, arr.length);
  for (let i = 0, j = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === " ") {
      reverse(arr, j, i);
      j = i + 1;
    }
  }

  return arr.join('');
};

// we can do it more simple
function reverse(arr, start, end) {
  for (let i = 0; i < Math.floor((end - start) / 2); i++) {
    const temp = arr[start + i];

    arr[start + i] = arr[end - 1 - i];
    arr[end - 1 - i] = temp;
  }
}


console.log(reverseWords("the sky"));
