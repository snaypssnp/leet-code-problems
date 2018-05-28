const MAX_INT = 2147483647;
const MIN_INT = -2147483648;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  let i = 0;
  let total = 0;
  let sign = 1;

  //1. Remove Spaces
  while (str[i] === " ") {
    i++;
  }

  //2. Handle signs
  if (str[i] === '-' || str[i] === '+') {
    sign = str[i++] === '-' ? -1 : 1;
  }

  //3. Convert number and avoid overflow
  while (!isNaN(parseFloat(str[i]))) {
    let digit = +str[i++];

    if (total > Math.floor(MAX_INT / 10) || (total === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)) {
      return sign === -1 ? MIN_INT : MAX_INT;
    }

    total = 10 * total + digit;
  }

  return total * sign
};

console.log(myAtoi("2147483648"));