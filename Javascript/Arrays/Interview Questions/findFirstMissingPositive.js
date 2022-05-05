/**
 * Using bruteforce run two loops one for 
 * positive numbers and another for the array length
 * 
 * O(n**2) Space O(1)
 * 
 * const arr = [-3, 5, 6, 2, -4, 4, 3]; // 3
 * 
 * @param {*} array 
 * @return {number}
 */
const findFirstMissingPositive = (array) => {
    let isExist = false;
    for (let index = 1; index < array.length - 1; index++) {
        for (let inner = 0; inner < array.length; inner++) {
            if (index === array[inner]) isExist = true;
        }
        if (!isExist) return index;
        isExist = false;
    }

    return 'All positive number exist'
}

const array = [-3, 5, 6, -4, 2 ,2, 4, 3, 7, 8];
console.log(findFirstMissingPositive(array));


/**
 * Create a hash table and adding the values to it,
 * run another loop for positive numbers and check if all of them 
 * exist 
 * 
 * O(n) - Space O(n)
 * @param {*} array 
 * @return {boolean}
 */

const findFirstMissingPositive_v1 = (array) => {
    const allElements = new Map();

    for (let index = 0; index < array.length; index++) {
        allElements.set(array[index], ((allElements.get(array[index]) +1 )|| 1));
    }

    for (let i = 1; i < array.length+1; i++) {
        if (!allElements.get(i)) return i;
    }
}

console.log(findFirstMissingPositive_v1(array));

/**
 * Using sorting and single scan
 * 
 * O(nlog(n)) Space O(1) 
 * @param {*} array 
 * @return {boolean}
 */
const findFirstMissingPositive_v2 = (array) => {
    array.sort((a, b) => a -b);
    let index = 0;

    for (; index < array.length; index++) {
        if (array[index] >= 1) break;
    }

    for (let i = index; i < array.length -1; i++) {
         if (array[index] !== array[index] + 1) {
             return array[index] +1;
         }
    }
}

console.log(findFirstMissingPositive_v1(array));

/**
 * using partition and in-place hashing
 */
const findFirstMissingPositive_v3 = () => {

}