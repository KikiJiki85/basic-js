const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let acc = 0;
  let nStr = String(n);

  for (let i = 0; i < nStr.length; i++) {
    acc += Number(nStr[i]);
    if (i === nStr.length - 1 && String(acc).length > 1) {
      i = -1;
      nStr = String(acc);
      acc = 0;
    }
  }
  return acc;
}

module.exports = {
  getSumOfDigits
};
