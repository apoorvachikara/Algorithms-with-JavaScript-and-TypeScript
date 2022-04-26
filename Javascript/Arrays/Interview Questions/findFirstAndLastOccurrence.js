/**
 * Time - O(n) and Space: O(1)
 * @param {number} array 
 * @returns {number,number} {start: number, end: number}
 */
const findFirstAndLast = (array, target) => {
    let start = -1;
    let end = -1;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            start === -1 ? start = index : end = index;
         }
    }
    return {start, end};
}

/**
 * Time - O(n + n) Space: O(1)
 * 
 * @param {number} array 
 * @param {number} target 
 * @returns 
 */
const findFirstAndLast_v1 = (array, target) => {
    return{ start: array.indexOf(target), end: array.lastIndexOf(target)};
}

/**
 * 
 * Using twice binary search
 * Time: O(logn + logn) Space: O(1)
 * 
 * @param {*} array 
 * @param {*} target 
 */
const findFirstAndLast_v2= (array, target) => {

     /**
      * We keep moving the binary search until we find the 
      * middle === target and middle - 1 < middle
      * 
      * @param {*} array 
      * @param {*} target 
      * @return {number}
      */
      const firstOccurence = (array,target) => {
            let start = 0;
            let end = array.length;

            while (start < end) {
                const middle = Math.trunc((start+end)/2);

                if (array[middle] > array[middle -1] && array[middle] === target) {
                    return middle;
                } else if (array[middle] < target) {
                        start = middle +1;
                } else {
                    end = middle - 1;
                }
            }
        }

        const lastOccurence = (array, target) => {
            let start = 0;
            let end = array.length;

            while (start < end) {
                const middle = Math.trunc((start+end)/2);

                if (array[middle] < array[middle + 1] && array[middle] === target) {
                    return middle;
                } else if (target < array[middle]) {
                    end = middle - 1;
                } else {
                    start = middle +1;
                }
            }
        }

        return {start: firstOccurence(array, target), end: lastOccurence(array, target)}
}


const arr = [1, 2, 3, 4, 4, 4, 4, 6, 7, 8];

console.log(findFirstAndLast(arr, 4));
console.log(findFirstAndLast_v1(arr, 10));
console.log(findFirstAndLast_v2(arr, 4));