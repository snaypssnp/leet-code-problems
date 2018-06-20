/**
 * @param {string} s
 * @return {number}
 */
function calculate(str) {
  const stack = []; // Instead of a stack, we use an array
  let sign = '+';
  let num = 0;

  str = str.trim();

  for (let i  = 0, len = str.length; i < len; i++) {
    const char = str[i];

    if (char === ' ') {
      continue;
    }

    if (!isNaN(char)) {
      num = 10 * num + parseInt(char);
    }

    if (isNaN(char) || i === len - 1) {
      switch(sign) {
        case '+': {
          stack.push(num);
          break;
        }
        case '-': {
          stack.push(-num);
          break;
        }
        case '*': {
          stack.push(stack.pop() * num);
          break;
        }
        case '/': {
          let dig = stack.pop();
          dig = dig < 0 ? Math.ceil(dig / num) : Math.floor(dig / num);
          stack.push(dig);
          break;
        }
      }
      num = 0;
      sign = char;
    }
  }

  return stack.reduce((sum, val) => sum + val, 0);
};
