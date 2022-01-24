/* eslint-disable valid-jsdoc */
/**
 *
 */
class BinarySearch {
/**
   *
   * @param array - array of number
   * @param target - target to find
   * @return index or -1
*/
  search(array: Array<number>, target : number) {
    let start = 0; let end = array.length;
    while (start <= end) {
      const middle = Math.floor((start + end )/2);

      if (array[middle] === target) {
        return middle;
      } else if (middle < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return - 1;
  }
}


const BS = new BinarySearch();
console.log(BS.search([1, 2, 3, 4, 5, 6], 6));
