/**
 * By sorting both the arrays and compare the numbers
 * @param {*} array1
 * @param {*} array2
 * @return {boolean}
 * Time - O(n + nlog(n)) Space - O(n)
 *
 */
const compare = (array1, array2) => {
  // length of arrays
  const l1 = array1.length;
  const l2 = array2.length;
  if (l1 !== l2) return false;

  // sort and match if they are same
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};

/**
 * Add the counts of the elements from one array
 * and compare it with another array
 *
 * @param {*} array1
 * @param {*} array2
 * @return {boolean}
 *
 */
const compare_v1 = (array1, array2) => {
  const l1 = array1.length;
  const l2 = array2.length;

  if (l1 !== l2) return false;

  const map = new Map();

  for (let index = 0; index < array1.length; index++) {
       map.get(array1[index]) ? map.set(array1[index], map.get(array1[index]) + 1) :
                                map.set(array1[index], 1);
  }

  for (let index = 0; index < array2.length; index++) {
    const count = map.get(array2[index]);
    if (count > -1) {
      map.set(array2[index], count - 1);
      continue;
    }
    return false;
  }

  return true;
};


const array1 = [0, -1, -2, 1, 4];
const array2 = [1, 4, -1, -2, 5];

console.log(compare(array1, array2));
console.log(compare_v1(array1, array2));


