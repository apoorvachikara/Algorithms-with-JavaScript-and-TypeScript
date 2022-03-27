/**
 * SquareOfSortedArray has two methods with their complexity written 
 * on the top. If there is any complex part I will add the comment on it
 */
class SquareOfSortedArray {
    constructor() {}

    //  O(n + nlogn) O(n) as sorting might need extra space
    sort(array : number[]) {
        for (let i =0; i < array.length; i++) {
            array[i] = array[i]**2; 
        }

        return array.sort((a, b) => a - b);
    }

    sortTwoPointer(array: number[]) {
    }
}


const sortedSquares = new SquareOfSortedArray();
const array = [0, -1, -3, -4, 3, 4, 9];

console.log(sortedSquares.sort(array));//  [0, 1, 9, 9, 16, 16, 81]
console.log(sortedSquares.sortTwoPointer(array));


