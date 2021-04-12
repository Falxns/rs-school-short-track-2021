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
  let max = 0;
  let buff = n.toString();
  buff = buff.split('');
  for (let i = 0; i < buff.length; i++) {
    const temp = buff.filter((e, index) => index !== i).join('');
    if (parseInt(temp, 10) > max) {
      max = parseInt(temp, 10);
    }
  }
  return max;
}

module.exports = deleteDigit;
