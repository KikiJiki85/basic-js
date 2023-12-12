const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNumber = String(n);
  let initialValue = strNumber.replace(strNumber[0], '');
  for (let i = 1; i < strNumber.length; i++) {
    if (Number(initialValue) < Number(strNumber.replace(strNumber[i], ''))) {
      initialValue = strNumber.replace(strNumber[i], '');
    }
  }
  return +initialValue;
}

module.exports = {
  deleteDigit
};
