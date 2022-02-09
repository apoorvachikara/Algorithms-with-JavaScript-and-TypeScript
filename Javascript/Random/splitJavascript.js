/* eslint-disable no-extend-native */
/**
 *
 */
const str = 'this is some string';
/**
 *
 * @param {*} sep
 * @return string
 */

String.prototype.customSplit = (separator = '') => {
  const res = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === separator || separator === '' && temp) {
      res.push(temp);
      temp = '';
    };
    if (el !== separator) {
      temp += el;
    }
  };
  if (temp) {
    res.push(temp);
    temp = '';
  };
  return res;
};
console.log(str.customSplit(' '));
