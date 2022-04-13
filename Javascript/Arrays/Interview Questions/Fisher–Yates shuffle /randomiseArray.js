/**
 * 
 * @param {number} array 
 * @return {array}
 * 
 * Randomise arrays or shuffling the array, it can be achived using 
 * below steps but the complexity is O(n^2);
 * arr = [1, 2, 3, 4, 5];
 * o/p arr = [4, 3, 5, 2, 1]; // in any order
 * 
 * Step 1: Create a temp array from original one
 * Step 2: Select random values and remove it from temp array
 * after adding the random index values to original array
 */
const randomArray = (array) => {
    const temp = [...array];
    let index = 0;

    while (temp.length) {
        const random = Math.floor(Math.random() * temp.length);
        array[index] = temp[random];
        temp.splice(random, 1);
        index++;
    } 

    return array;
}

const array = [1, 2, 3, 4, 5];
console.log(randomArray(array));

/**
 * 
 * @param {number} array 
 * @return {number[]}
 * This algorithm solves the problem in O(n) complexity
 * 
 * Step 1: Start from the end of the array index
 * Step 2: run a loop from the end of the array i
 * Step 3: choose random number from 0 to array.length - 1
 * Step 4: every iteration the slected random number will be swaped with 
 * random index and array loop index 
 * Step 5: once the loop is over you will get random array
 */
 const fisherYates = (array) => {

    for (let index = array.length - 1; index > 0; index--) {
        // index + 1 makes the current index inclusive
        const random = Math.floor(Math.random() * (index + 1));
        const temp = array[random];
        array[random] = array[index];
        array[index] = temp;
    }
    return array;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(fisherYates(arr));