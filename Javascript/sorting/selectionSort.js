/**
 * In-place algorithm is used generally when memory is more important than time complexity
 * Selection Sort - It is a in-place algorithm with O(1) space complexity
 * The time complexity is O(n**2) worst and average case- 
 * Best case complexity is O(n)
 * Working - It iterates through all the elements using two for loops.
 * It works on repeatedly finding the minimun element in the subarray and swap them
 * Step1 - Take the first element as the minimum element and rest of the array is 
 *         the sub-array(where we need to get minimum element)
 * Step2 - Follow step1 by incrementing the minimum element pointer to the next element in the array 
 *         and find the minimum element in the sub array
 */

/**
 * 
 * @param {*} arr 
 * @returns sorted Array
 */

class SelectionSort {
      constructor(){}

      sort(arr) {
          const len = arr.length;
          for (let i = 0; i < len; i++) {
              const min = this.min(arr, i);
              if (arr[min] < arr[i]) {
                [arr[i], arr[min]] = [arr[min], arr[i]];
              }
          }
          return arr;
      }

      /**
       * 
       * @param {*} arr - to be sorted
       * @param {*} start - index from which minimum element to be find out 
       * @returns - index of minimum element
       */

      min(arr, start = 0) {
        const len = arr.length;
        let minIndex = start;
        for (let i = start+1; i < len; i++) {
            if (arr[minIndex] > arr[i]) {
               minIndex = i;
            }
        }
        return minIndex;
      }
}


let selectionSort = new SelectionSort();
console.log(selectionSort.sort([0,2,2,2,0,2,1,1]));
