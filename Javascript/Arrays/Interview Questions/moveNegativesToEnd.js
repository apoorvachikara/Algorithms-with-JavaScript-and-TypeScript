/**
 * 
 * @param {*} array 
 * @return {[number]}
 */
const moveNegatives = (array) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        if (array[right] > 0 && array[left] < 0) {
            const temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left += 1;
            right -= 1;
        } else if (array[right] < 0 && array[left] >= 0) {
            right -= 1;
        } else if (array[left] > 0 && array[right] < 0 ) {
            left += 1;
        } else {
            left += 1;
            right -= 1
        }
    }

    return array;
}

// can use dutch flag algorithm
console.log(moveNegatives([-1, 2, 0, -2, , 0, -1]));