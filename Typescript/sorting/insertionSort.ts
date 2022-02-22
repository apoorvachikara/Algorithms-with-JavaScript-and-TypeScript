/**
 * [3, 2, 5, 4, 6];
 *  Working:
 * 
 */
class InsertionSort {
    sort(array) {
        // first loop for partially sorted array
        for (let i = 1, len = array.length; i < len; i++) {
             // now we set the current element 
             // which is at 1 position
             // we don't need it, but for clarity purpose I have added it
             const current = array[i];
             // iterator for partially sorted array
             let j = i -1;

             while (j >= 0 && array[j] > current) {
                 // here we will swap the element
                 array[j + 1] = array[j];
                 array[j] = current;
                 j -= 1;
             }
             
        }
        console.log(array);
    }
}

const insertionSort = new InsertionSort();
const arr = [2, 4, 3, 1, 6, 5];
insertionSort.sort(arr);