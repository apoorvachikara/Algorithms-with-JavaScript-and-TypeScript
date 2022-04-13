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

