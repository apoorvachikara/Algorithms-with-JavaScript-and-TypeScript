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
 * @param {*} array 
 * @param {*} target 
 */
const findFirstAndLast_v2= (array, target) => {

}


const arr = [1, 2, 3, 4, 4, 4, 4, 6, 7, 8];

console.log(findFirstAndLast(arr, 4));
console.log(findFirstAndLast_v1(arr, 10));