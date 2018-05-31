/**
 * Created by sergejpopov on 29/05/18.
 */

function lengthOfLongestSubstringTwoDistinct(s) {
  let max = 0;
  let k = 0;
  let j =-1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      continue;
    }

    if (j >= 0 && s[i] !== s[j]) {
      max = Math.max(max, i - k);
      console.log(`max = ${max}`);

      k = j + 1;
    }

    j = i - 1;
  }

  return Math.max(max, s.length - k);
}

console.log(lengthOfLongestSubstringTwoDistinct("abcaabbcccab"));
