// Write an efficient program for printing k largest elements in an array.
// Elements in an array can be in any order.
// For example, if the given array is [1, 23, 12, 9, 30, 2, 50] and
// you are asked for the largest 3 elements i.e., k = 3
// then your program should print 50, 30, and 23.


// O(nlog(n))
const findKElements = (array, smallest = 0, largest = 0) => {
  array.sort((a, b) => a - b);
  return smallest ? array.slice(0, smallest) : array.slice(-largest);
};

const mockArr = [1, 23, 12, 9, 30, 2, 50];
console.log(findKElements(mockArr, 0, 3));


/**
 * Using quick sort
 * @param {*} array 
 * @param {*} k 
 */

const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const quickSelect = (nums, left, right, k) => {
    let leftP = left;
    let rightP = right;
    let mid = nums[right];

    while (leftP < rightP) {
      if
    }
}

const findKthElement = (array, k) => {
  return quickSelect(array, 0, array.length - 1, k)
}


