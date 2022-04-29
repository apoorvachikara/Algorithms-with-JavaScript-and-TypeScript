/**
 * It stores all the series in an array
 * takes more memory, but faster as it is taking last values
 * from the array
 * 
 * O(n) - Time, O(n) - space
 * @param {*} number 
 * @return {number}
 */
const fib = (number) => {
    const fibonacci= [0, 1];

    for (let index = 2; index <= number; index++) {
        fibonacci[index] = fibonacci[index -1] + fibonacci[index -2]; 
    }

    return fibonacci[fibonacci.length -1];
}

console.log(fib(9)); //34

/**
 * Memory efficient as we are only taking last compuatation
 * to get subsequent results
 * 
 * O(n) = Time, Space O(1)
 * 
 * @param {*} number 
 * @return {number}
 */
const fib_v2 = (number) => {
    let first = 0;
    let second = 1;
    let result = 0;

    for (let index = 2; index <= number; index++) {
        result = first + second;
        [second, first] = [result, second];
    }
    return result;
}

console.log(fib_v2(9)); //34