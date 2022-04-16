/**
 * It does create the random number, but not efficient
 * After some iteration might get same number
 * 
 * @returns {number} random number
 */
let seed = 42;
const middleSquareMethod = () => {
    const result = (seed**2).toString().padStart(4, '0').slice(1, 3);
    seed = parseInt(result);
    return result;
}

console.log(middleSquareMethod());




let a = 1664525;
let m = Math.pow(2, 32);
let c = 1013904223;
let X = 1111111;

/**
 * 
 */
const linearCongruentialGenerator = () => {
    X = (a * X + c) % m;
    return X;

}

console.log(linearCongruentialGenerator());