/**
 * 
 */
class Kadane {
    constructor() {}

    execute(array: Array<number>) {
        let maxSum = 0;
        let maxSumEnds = 0;

        for (let i =0; i < array.length; i++) {
            maxSumEnds += array[i];

            if (maxSum < maxSumEnds)  maxSum = maxSumEnds;
            if (maxSum < 0) maxSumEnds =0;
        }

        return maxSum;
    }

    execute_Eff(array: Array<number>) {
        let maxSumEnds = array[0];
        let maxSum = array[0];

        for (let index = 1; index < array.length; index++) {
            maxSumEnds = Math.max(array[index], array[index] + maxSumEnds);
            maxSum = Math.max(maxSum, maxSumEnds);
        }

        return maxSum;
    }
}

const arr: Array<number>  = [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12];
const algo = {normal: new Kadane().execute(arr), efficient: new Kadane().execute_Eff(arr)};

console.log(algo.normal, algo.efficient);