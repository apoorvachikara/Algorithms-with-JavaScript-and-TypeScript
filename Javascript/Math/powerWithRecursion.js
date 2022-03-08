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