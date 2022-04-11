/**
 * 
 * @param {*} num 
 * @param {*} power_1 
 * @return {number}
 */
const power = (num, power_1) => {

    // if power is less than 0
    if (power_1 < 0 ) return "Unable to get the results at the moment";

    // if power is 0 return 1
    if (power_1 === 0) return 1;
    
    // base case
    if (power_1 === 1) return num;

    return num * power(num, power_1 - 1);
}

console.log(power(2, 8));

/**
 * 
 * @param {*} number 
 * @param {*} power 
 * @return {number}
 * Time O(logn) and Space O(logn)
 * It is not recursive and follows iteration
 */
const power_eff = (number, power) => {
    let res = 1;

    while (power > 0) {
        // check if exponent is odd 
        // multilply it to response to make
        // it even
        if (power & 1) 
            res = res * number;

        // divide power by half
        power = power >> 1;
        
        // square the number 
        number = number ** 2;
    }
    return res;
}

console.log(power_eff(2, 8));