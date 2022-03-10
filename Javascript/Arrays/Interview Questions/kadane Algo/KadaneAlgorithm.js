/**
 * Given an integer array, find the contiguous subarray
 * (containing at least one number) with the largest sum
 * or in other words the maximum sum contiguous subarray
 * and print its sum.
 *
 * Kadane’s algorithm is an iterative dynamic programming
 * algorithm in which we search for a maximum sum contiguous
 * subarray within a one-dimensional numeric array.
 */

/**
 * This is simple kadane's Algorithm - O(n) time and O(1) space
 * Working: 
 * Step 1: 
 * @param {*} array 
 * @return {number}
 */
const kandane = (array) => {
    let maxSum = 0;
    let maxSumEnds = 0;

    for (let i =0, len = array.length; i < len; i++) {
            maxSumEnds += array[i];
            if (maxSum < maxSumEnds) maxSum = maxSumEnds;
            if (maxSumEnds < 0) maxSumEnds = 0;
    }

    return maxSum;
}

const arr  = [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12]
console.log(kandane(arr));