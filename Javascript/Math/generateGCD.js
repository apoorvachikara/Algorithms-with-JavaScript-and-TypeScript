/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @return {number} 
 */
const GCD = (a, b) => {
    if ( a === 0 && b === 0) return 0;
    else if (a === 0) return b;
    else if (b === 0) return a;
    else if (a === b) return a;
    else if (a > b) return GCD(a - b , b);
    else return GCD(a, b - a);
}

console.log(GCD(98, 56));

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @return {number} 
 */
const GCD_EUCLIDEAN = (a, b) => {
    if (b === 0) return a;
    return GCD_EUCLIDEAN(b, a % b);
}

console.log(GCD_EUCLIDEAN(98, 56));