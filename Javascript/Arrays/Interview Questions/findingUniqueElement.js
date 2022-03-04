/**
 * Find the unique first occurenece element in the array
 * const arr = [2, 3, 4, 4, 3, 2, 5, 7, 7, 6, 7];
 * Here, there are two unique elements [5, 6], but
 * 5 occurence is at the begining so `5` will be answer
 *
 * Similar Question is is string patter, find the first unique
 * character in string
 * const str = "Hello, Hi is the first thing."
 * Answer will be `e`
 */

/**
 *
 * @param {number} array
 * @return {number}
 */
const findFirstUniqueOccurence = (array) => {
  const elementMapping = new Map();
  let unique= '';

  for (let index = 0; index < array.length; index++) {
    !elementMapping.has(array[index]) ? elementMapping.set(array[index], 1) : elementMapping.set(array[index], elementMapping.get(array[index]) + 1);
  }

  for (const [key, value] of elementMapping) {
    if (value === 1) {
      unique = key;
      break;
    }
  }

  return unique ? unique : -1;
};
const arr = [2, 3, 4, 4, 3, 2, 5, 7, 7, 6, 7];
console.log(findFirstUniqueOccurence(arr));
