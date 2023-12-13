const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let acc = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] !== str[j]) break;
      else if (str[i] === str[j]) acc++;
    }
    if (acc > 1 && !result.includes(str[i])) result += acc + str[i];
    else if (str[i] === str[i - 1]) continue;
    else result += str[i];
  }
  return result;
}

module.exports = {
  encodeLine
};
