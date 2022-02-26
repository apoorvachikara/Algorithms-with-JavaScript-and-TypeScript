/**
 *
 * @param {number[]} arr
 * @return {number[]} array
 */
const merge = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeSort(merge(left), merge(right));
};

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]} sorted array
 */
const mergeSort = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return result.concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
};

const arr = [0, -1, -4, 9, 10, -190, 100, 999, 7777];
console.log(merge(arr));
