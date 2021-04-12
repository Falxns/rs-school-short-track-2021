/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let buff = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      buff.push(arr[i]);
    }
  }
  buff = buff.sort((a, b) => a - b);
  const res = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res[i] = -1;
    } else {
      res[i] = buff[j];
      j++;
    }
  }
  return res;
}

module.exports = sortByHeight;
