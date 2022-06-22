/**
 * @param {*} array
 * @param {*} n
 * @param {*} m
 * @returns
 */
const findMinAndMax = (array, n, m) => {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = start + m - 1;
  let minArr = [];
  let min = Number.MAX_SAFE_INTEGER;
  //
  while (end < n) {
    const diff = array[end] - array[start];
    if (min > diff) {
      min = diff;
      minArr = array.slice(start, end + 1);
    }
    start += 1;
    end += 1;
  }
  return {min, minArr};
};

const array = [3, 4, 1, 9, 56, 7, 9, 12];
const group = 5;
console.log(findMinAndMax(array, array.length, group));

