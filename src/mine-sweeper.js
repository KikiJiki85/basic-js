const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const rows = matrix.length;
  const cols = matrix[0].length;
  const setup = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let minesCount = 0;

      for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {
          if (i + a >= 0 && i + a < rows && !(a === 0 && b === 0)) {
            if (matrix[i + a][j + b]) {
              minesCount++;
            }
          }
        }
      }

      row.push(minesCount);
    }
    setup.push(row);
  }

  return setup;
}


module.exports = {
  minesweeper
};
