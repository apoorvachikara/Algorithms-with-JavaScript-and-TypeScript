/**
 * 
 * @param {*} array 
 * @param {number} shift
 * @return {number} array
 */
const rotate = (array, shift) => {
    const len = array.length;
    if (shift > len) {
        shift %= len;
    } 

    for (let i =0 ;i < shift; i++) {
        array.unshift(array.pop());
    }

    return array;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(rotate(array, 2));
const array1 = [1, 2, 3, 4, 5, 6,7];
console.log(rotate(array1, 21));