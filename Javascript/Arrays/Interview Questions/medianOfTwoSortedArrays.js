
/**
 * O(n) time 
 * 
 * @param {number[]} array_1 
 * @param {number[]} array_2 
 * @returns {number} 
 */
const findMedian = (array_1, array_2) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < array_1.length && rightIndex < array_2.length) {
        // comparing which side is smaller and add it to result
        if (array_1[leftIndex] < array_2[rightIndex]) {
            result.push(array_1[leftIndex]);
            leftIndex += 1;
        } else {
            result.push(array_2[rightIndex]);
            rightIndex += 1;
        }
    }

    result = result.concat(array_1.slice(leftIndex)).concat(array_2.slice(rightIndex));

    if (result.length === 0) return -1;

    else if(result.length === 1) return result[0];
    // checking the median for even length arrays
    else if (result.length % 2 === 0) {
        const middle_1 = Math.floor(result.length/2);
        const middle_2 = middle_1 -1;
        return (result[middle_1] + result[middle_2])/2
    } else {
        return result[Math.floor(result.length/2)];
    }
}

console.log(findMedian([1, 2, 3, 4], [5, 6, 7]), 4);
console.log(findMedian([-1, 3, 5, 6], [-4, -3, -2, 0]), -0.5);
console.log(findMedian([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]) , 3);