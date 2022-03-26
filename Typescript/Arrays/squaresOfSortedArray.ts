class SquareOfSortedArray {
    constructor() {}

    sort(array) {
        for (let i =0; i < array.length; i++) {
            array[i] = array[i]**2; 
        }

        return array.sort((a, b) => a - b);
    }
}

const sortedSquares = new SquareOfSortedArray();
const array = [0, -1, -3, -4, 3, 4, 9];

console.log(sortedSquares.sort(array));//  [0, 1, 9, 9, 16, 16, 81]