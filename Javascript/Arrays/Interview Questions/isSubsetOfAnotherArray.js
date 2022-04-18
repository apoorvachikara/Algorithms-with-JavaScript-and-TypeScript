/**
 * bruteforce approach to check if the values exist 
 * 
 * @param {*} mainArray 
 * @param {*} subset 
 * @return {boolean}
 */
const isSubset = (mainArray, subset) => {
    const mLength = mainArray.length;
    let isExist = false;
    for (let i = 0; i < subset.length; i++) {
        for (let j = 0; j < mLength;j++) {
            if (subset[i] === mainArray[j]) {
                  isExist = true;
            }
        }
        if (!isExist) return false;
        isExist = false;
    }
    return true;
}

/**
 * 
 * @param {*} array 
 * @param {*} target 
 * @return {index} // -1 doesn't exist and rest is the number of index
 */
 const binary = (array, target) => {

    let start = 0;
    let end = array.length;

    while(start <= end) {
        const middle = Math.floor(((start+ end)/2));

        if (array[middle] === target) return middle;
        else if (array[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

/**
 * sorting the mainArray to imporve the searching 
 * using binary search
 * 
 * @param {*} mainArray 
 * @param {*} subset 
 * @return {boolean}
 */
const isSubset_V1 = (mainArray, subset) => {
    mainArray.sort((a,b) => a -b);
    
    for (let index = 0; index < subset.length; index++) {
        const isExist = binary(mainArray, subset[index]);
        if (isExist === -1) return false;
    }

    return true;
}





const array_1 = [2, 8, 12, 6, 10, 11];
const array_2 = [8, 2, 6, 11, 1];
console.log(isSubset(array_1, array_2));
console.log(isSubset_V1(array_1, array_2));