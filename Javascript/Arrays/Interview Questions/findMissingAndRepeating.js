/**
 * Calculate natural number sum = n(n+1)/2
 * @param {number} length 
 * @return number - sum
 */
const naturalNumberSum = (length) => (length * (length+ 1))/2;

/**
 * 
 * @param {*} array 
 * @return {missing, repeating} 
 */
const findMissingAndRepeating = (array) => {
    let repeating = -1;
    let total = 0;
    let actualTotal = naturalNumberSum(array.length);
    for (let index = 0; index < array.length; index++) {
        total += array[index];
        if(array[index] !== array.lastIndexOf(array[index])) {
            repeating = array[index];
        }
    }

    const missing = actualTotal - (total - repeating);
    return {missing, repeating}
}

const array = [5,1, 3, 2, 5]; 

console.log(findMissingAndRepeating(array)); // 4 and 5