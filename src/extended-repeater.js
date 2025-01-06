const { NotImplementedError } = require("../extensions/index.js");

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
  str = String(str);
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const separator = options.separator !== undefined ? options.separator : "+";
  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";
  const additionRepeatTimes =
    options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const fullAddition = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);
  const repeatTimes =
    options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const fullStr = Array(repeatTimes)
    .fill(str + fullAddition)
    .join(separator);
  return fullStr;
}

module.exports = {
  repeater,
};
