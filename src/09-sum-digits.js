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
  let num = n.toString().split('');
  const count = num.length;
  for (let i = 0; i < count; i++) {
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
      sum += parseInt(num[j], 10);
    }
    if (sum < 10) {
      return sum;
    }
    num = num.splice(i + 1);
  }
  return null;
}

module.exports = getSumOfDigits;
