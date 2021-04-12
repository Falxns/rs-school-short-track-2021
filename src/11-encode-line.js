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
  let buff = str;
  let res = '';
  for (let i = 0; i < buff.length; i++) {
    if (buff[i + 1] === buff[i]) {
      let count = 0;
      for (let j = 0; j < buff.length; j++) {
        if (buff[j] === buff[i]) {
          count += 1;
        }
      }
      res = res.concat(`${count}${buff[i]}`);
      buff = buff.slice(buff.lastIndexOf(buff[i]));
      i = 0;
    } else {
      res = res.concat(`${buff[i]}`);
    }
  }
  return res;
}

module.exports = encodeLine;
