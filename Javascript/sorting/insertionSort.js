
/**
 * Difference b/w insertion sort and bubble sort
 *
 * Bubble sort works while swapping adjacent elements to the end
 * And Insertion sort works by sending one element in the partially sorted array
 */

/**
 * Insertion Sort - It is an in-place alog with space complexity O(1).
 * The time complexity average and worst is O(n**2)- best is O(n)
 *
 * Working - We iterate throught left to right.
 * const arr = [4, 2, 5, 3, 6];
 * Step 1 - We consider first element in the array as partially sorted array
 * i.e [4]
 * Step 2 - now In the first loop iteration we check if [4] is greater than [2]
 * Step 3 - we need to swap them
 * Step 4: Now we increase the window of partially sorted array like this [2, 4]
 * Step 5: Again we check if the first element in unsorted array that is [5] in
 * this step where to fit this in sorted partially array
 * Step 6: if we check [4] is greater than [5] no so we just add it in 
 * temp sorted array
 * Step 7: Now, partially sorted array becomes [2, 4, 5] and we have first value
 * at unsorted array as [3]
 * Step 8: We can [5] > [3] yes, so we swap them. partially array - [2, 4, 3];
 * Step 9: Now we can see partially sorted array is not actually sorted. So, our
 * insertion algo will be helping us in this.
 * Step 10: We are inserting this [3] in the right place in the partially
 *  sorted array
 * Step 11: We check if [4] > [3], swap them and then we again check [2] > [3]
 * No so we will be out of the loop
 * Step 12: follow the same steps from Step 7
 */

/**
 * InsertionSort class
 */
class InsertionSort {
/**
 *
 * @param {*} array
 * @return {Array}
 */
  sort(array) {
    const len = array.length;
    for (let i =1; i < len; i++) {
      const current = array[i];
      let j = i -1;
      // move smallest item to the left
      // as long as the current item is smaller than
      // the previous one we will be moving the item to left

      while (j > -1 && (array[j] > current)) {
        array[j+1] = array[j];
        array[j+1] = current;
        j--;
      }
    }
    return array;
  }
}

const insertionSort = new InsertionSort();
console.log(insertionSort.sort([3, 0, 2, 5, -1, 4, 1]));

