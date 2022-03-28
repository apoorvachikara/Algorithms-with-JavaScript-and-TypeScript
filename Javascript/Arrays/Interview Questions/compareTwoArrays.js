/**
 * 
 * @param {*} array1 
 * @param {*} array2 
 * @return {boolean}
 * Time - O(n + nlog(n)) Space - O(n)
 */
const compare = (array1, array2) => {
    // length of arrays
    const l1 = array1.length;
    const l2 = array2.length; 
    if (l1 !== l2) return false;

    // sort and match if they are same
    array1.sort((a,b) => a - b);
    array2.sort((a,b) => a - b);

    for (let index = 0; index < array1.length; index++) {
        if (array1[index] !== array2[index]) {
            return false;
        }
    }

    return true;
}


const array1 = [0, -1, -2, 1, 4];
const array2 = [1, 4, -1, -2, 0];

console.log(compare(array1, array2));