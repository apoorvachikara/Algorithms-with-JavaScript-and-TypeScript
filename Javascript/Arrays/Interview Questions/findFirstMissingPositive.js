/**
 * Using bruteforce run two loops one for 
 * positive numbers and another for the array length
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
            debugger
            if (index === array[inner]) isExist = true;
        }
        if (!isExist) return index;
        isExist = false;
    }

    return 'All positive number exist'
}

const array = [-3, 5, 6, -4, 2, 4, 3, 1, 7];
console.log(findFirstMissingPositive(array));