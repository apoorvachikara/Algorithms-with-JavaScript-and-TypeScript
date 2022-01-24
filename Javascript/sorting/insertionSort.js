/**
 * Insertion Sort - It is an in-place alog with space complexity O(1).
 * The time complexity average and worst is O(n**2)- best is O(n)
 * Working - We iterate throught left to right.
 * Step1 -
 */

/**
 * InsertionSort class
 */
class InsertionSort {
/**
 *
 * @param {*} arr
 * @return {Array}
 */
  sort(arr) {
    const len = arr.length;
    for (let i =1; i < len; i++) {
      const current = arr[i];
      let j = i -1;
      // move smallest item to the left
      // as long as the current item is smaller than
      // the previous one we will be moving the item to left
      while (j > -1 && (arr[j] > current)) {
        arr[j+1] = arr[j];
        j--;
      }
      // if
      arr[j+1] = current;
    }
    return arr;
  }
}

const insertionSort = new InsertionSort().sort;
console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));
