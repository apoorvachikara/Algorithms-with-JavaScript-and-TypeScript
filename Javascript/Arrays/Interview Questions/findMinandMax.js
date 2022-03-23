/**
 * 
 * @param {*} array 
 * @return {min: number, max: number}
 * O(n) space:O(1)
 */
const minAndMax = (array) => {
    let min = array[0];
    let max = array[0];

    for (let index = 0; index < array.length; index++) {
        // check if max i samller than the existing number
        if (max < array[index]) {
            max = array[index];
            continue;
        }
        // check if min is greater than the existing number
        if(min > array[index]) min = array[index];   
    }

    return {min, max}
}


/**
 * 
 * @param {*} array 
 * @return {min: number, max: number}
 * O(nlogn) O(n) | O(1) depending upon runtime
 */
const minAndMax_Sort = (array) => {
      array.sort((a, b) => a - b);
      return {min: array[0], max: array[array.length - 1]};
}

console.log(minAndMax([5, 4, 8, 3, -1, 45, 6, 7, 8]));
console.log(minAndMax_Sort([5, 4, 8, 3, -1, 45, 6, 7, 8]));