class SelectionSort {

    /**
    *
    * @param {*} arr
    * @return {*} Array
    */
    sort(arr: number[]) {
        for (let index = 0; index < arr.length -1; index++) {
            const min = this.min(arr, index);
            if (arr[index] > arr[min]) {
              const temp = arr[min];
              arr[min] = arr[index];
              arr[index] = temp;
              // add more memory so removing it
              // [arr[index], arr[min]] = [arr[min], arr[index]];
            }
        }
        return arr;
    }

  /**
   *
   * @param {*} arr
   * @param {*} start
   * @return {Array}
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
const selectionSort = new SelectionSort();
console.log(selectionSort.sort([0, 2, 2, 2, 0, 2, 1, 1]));