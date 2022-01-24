/**
 * Bubble sort is a simple alogrithm for searching.
 * It is a in-place algorithm with space complexity O(1)
 * It worst and average case complexity is O(n**2)
 */

/**
 * Working - It checks every element in the array and
 * swaps if some condition mets.
 *
 * There are two for loops which iterate over the array.
 * First loop starts with first element in the array and
 * move along to the last element.
 *
 * Step1 - The inner for loop then compares(which is smaller)
 * the outter loop pointer.
 *
 * Step2 - if the inner loop pointer element is smaller,
 * we can swap the elements.
 *
 * we follow the  steps 1 & 2 until we reach at the end of the array
 * return - sorted in-place array
 */

const array = [3, 2, 56, 2, 3, 42, 3, 2, 56, 2, 3, 42, 3, 2, 56];
// eslint-disable-next-line max-len
const array1 = [0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1];

const log = console.log;
/**
 * BubbleSort class
 */
class BubbleSort {
/**
     *
     * @param {*} arr
     * @return {Array}
*/
  bubbleSort(arr) {
    const len = arr.length;
    console.time('start');
    for (let i = len-1; i >= 0; i--) {
      for (let j=1; j <= i; j++) {
        if (arr[j -1] > arr[j]) {
          const temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.timeEnd('start');
    log(arr);
    return arr;
  };

  /**
   *
   * @param {*} arr
   * @return {Array}
   */
  bubbleSortEfficient(arr) {
    const len = arr.length;
    let swap = false;
    for (let i = len-1; i >= 0; i--) {
      for (let j=1; j <= i; j++) {
        if (arr[j -1] > arr[j]) {
          const temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
          swap = true;
        }
      }
      if (!swap) {
        break;
      }
    }
    return arr;
  };
}

const bubble = new BubbleSort();
bubble.bubbleSortEfficient(array);
bubble.bubbleSort(array1);
