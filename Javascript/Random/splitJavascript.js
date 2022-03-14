/* eslint-disable no-extend-native */
/**
 *
 */
const str = 'this is some string';
const str1 = "hello  world";
/**
 *
 * @param {*} sep
 * @return string
 */

String.prototype.customSplit =  function (separator = '') {
  console.log(this);
  const res = [];
  const string = this;
  let temp = '';
  for (let i = 0; i < string.length; i++) {
    const el = string[i];
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
  };
  return res;
};

console.log(str.customSplit(' '));

