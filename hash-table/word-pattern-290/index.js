/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
function wordPattern(pattern, str) {
  const words = str.split(/\s/);

  if (words.length !== pattern.length) {
    return false;
  }

  const hashChars = new Map();
  const hashWords = new Map();

  for (let i = 0; i <  pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (hashChars.has(char) && hashChars.get(char) !== word) {
      return false;
    }

    if (hashWords.has(word) && hashWords.get(word) !== char) {
      return false;
    }

    hashChars.set(char, word);
    hashWords.set(word, char);
  }

  return true;
};

console.log(wordPattern('abba', 'dog cat cat dg'));
