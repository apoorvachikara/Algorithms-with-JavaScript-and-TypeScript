/**
 * Big O(nlogn) space O(n)
 * We have a sorted array and we need to square its element and
 * they should be placed in sorted manner
 * arr = [-6, -1, 0, 1, 4];
 * sortedArr = [0, 1, 1, 16, 36];
 *
 * @param {*} array
 * @return {[]} array
 */
const squares = (array) => {
  for (let i = 0, len = array.length; i < len; i++) {
    array[i] *=array[i];
  }

  return array.sort((a, b) => a -b);
};

// console.log(squares([-6, -3, 0, 2, 3, 4]));


/**
 * @param {*} array
 * @return {[]} number
 *
 * More efficient approach could be to separate negatives and positives
 * then merge them using merge function - based on merge sort
 * O(n) and space O(n)
 *
 */
const squaresUsingMergeSort = (array) => {
  // find index for positive value starts
  const negativeIndex = array.findIndex((el) => el >=0 );
  return merge(negativeIndex - 1, negativeIndex, array);
};

const merge = (left, right, array ) => {
  let leftIndex = left;
  let rightIndex = right;
  let index = 0;
  const result = [];

  // Here we check every value in right(postive) 
  // and left(negative) values square
  // and copy them in a new array starting from index 0
  while (leftIndex >= 0 && rightIndex <= array.length - 1) {
    const leftSquare = array[leftIndex]**2;
    const rightSquare = array[rightIndex]**2;
    if (leftSquare < rightSquare) {
      result[index] = leftSquare;
      leftIndex -= 1;
    } else {
      result[index] = rightSquare;
      rightIndex += 1;
    }
    index += 1;
  }

  // these loops are for miss over values and will be added in the last
  while (leftIndex >= 0) {
    result[index++] = array[leftIndex] ** 2;
    leftIndex -= 1;
  }

  while ( rightIndex <= array.length -1 ) {
    result[index++] = array[rightIndex] ** 2;
    rightIndex += 1;
  }

  return result;
};

console.log(squaresUsingMergeSort([-6, -4, 0, 1, 2, 4]));


/**
 *
 * @param {*} array
 * @return {Array<number>}
 *
 * O(n) and space O(n)
 *
 * Here we can have two pointer left and right, we compare squares of left
 * and right based on the comparision we increment and dcrement pointer
 * left >= right - we need to swap them and decrment right pointer
 *  left < right - decrement right pointer.
 *  Once the left and right pointer cross over come out of loop
 * arr = [-3, -2, -1, 0, 1, 2, 4, 9];
 */
const squaresUsingTwoPointer = (array) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  const result = new Array(rightPointer + 1).fill(0);
  let index = array.length -1;


  while (leftPointer <= rightPointer) {
    const leftSquare = array[leftPointer] ** 2;
    const rightSquare = array[rightPointer] ** 2;

    if (leftSquare > rightSquare) {
      result[index] = array[leftPointer] ** 2;
      leftPointer += 1;
    } else {
      // swap(leftPointer, rightPointer);
      result[index] = array[rightPointer] ** 2;
      rightPointer -= 1;
    }
    index -= 1;
  }
  return result;
};

console.log(squaresUsingTwoPointer( [0, -1, -3, -4, 3, 4, 9]));
// console.log(squaresUsingTwoPointer([-3, -2, -1, 0, 1, 2, 4, 9]));
