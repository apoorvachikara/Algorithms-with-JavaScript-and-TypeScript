/**
 * 
 * @param {*} array 
 * @returns {number} index
 */
const findPeak = (array) => {
    let peak = array[0];
    let peakIndex = 0;

    for (let i = 1; i < array.length; i++) {
            if (peak < array[i]) peakIndex = i;
    }

    return peakIndex;
}

console.log(findPeak([1,2,3,2,3,1]));