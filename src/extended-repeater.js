const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let sep = options.separator ? options.separator : '+';
  let add = typeof options.addition !== 'undefined' ? options.addition : '';
  let addRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  let addSep = options.additionSeparator ? options.additionSeparator : '|';
  let addPlusSep = !addSep || !addRepeat ? add : (add + addSep).repeat(addRepeat).slice(0, -addSep.length);

  return (str + addPlusSep + sep).repeat(repeatTimes).slice(0, -sep.length);
}
module.exports = {
  repeater
};
