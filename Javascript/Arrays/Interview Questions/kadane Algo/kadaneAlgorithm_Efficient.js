const kandane = (array) => {
    let maxSum = array[0];
    let maxSumEnd = array[0];

    for (let index = 1; index < array.length; index++) {
        maxSumEnd = Math.max(array[index], array[index] + maxSumEnd);
        maxSum = Math.max(maxSum, maxSumEnd);
    }

    return maxSum;
}

const arr  = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(kandane(arr));