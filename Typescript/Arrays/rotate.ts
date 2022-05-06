/**
 * 
 * @param {number} array 
 * @return {number} array
 */
const rotateArray = (array: number[], rotate: number) => {
    const shift = rotate > array.length ?  array.length % rotate: rotate;

    for (let index = 0; index < shift; index++) {
        array.unshift(array.pop());
    }
    return array;
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(array, 3));
