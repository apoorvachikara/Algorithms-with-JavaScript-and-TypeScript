/**
 * 
 * @param array 
 * @returns sum: number
 * 
 * O(n) Time and O(n) Space
 */
const sumOfUniqueElements = (array : Array<number>) => {
    const counter = new Map<number, number>();
    let sum = 0;
    for (const number of array) {
        counter.set(number, (counter.get(number) || 0) +1);
    }   

    for (const [number, count] of counter) {
        if (count === 1) sum += number;
    }

    return sum;
}

console.log(sumOfUniqueElements([1, 2, 3, 1]));
