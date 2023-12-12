const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let acc = 0;
  let idxString = '';
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] > 0 && !idxString.includes(i)) acc += row[i];
      else idxString += i;
    }
  }
  return acc;
}

module.exports = {
  getMatrixElementsSum
};
