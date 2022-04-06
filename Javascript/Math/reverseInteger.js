/**
 * 
 * @param {*} number 
 * @return {string}
 * Time O(n) O(n) space (creating new array and string);
 */

const reverse = (number) => {
    return Array.from(number.toString()).reverse().join('');
}

const reverse_version_1 = (number) => {
        const str = number.toString();
        const res = [];
        for (let index = str.length - 1; index > -1; index--) {
            res.push(str[index]);
        }

        return res.join('');
}


const reverse_eff = (number) => {
    let result = 0;
    
    let sign = Math.sign(number);
    number = sign === -1 ? (-1*number) : number;

    while(number > 0) {
        const lastDigit = number % 10;
        result = result * 10 + lastDigit;
        number = Math.floor(number/10);
    }

    return sign === -1 ? sign*result : result;


}
console.log(reverse(1234));
console.log(reverse_version_1(1234));
console.log(reverse_eff(1234));
console.log(reverse_eff(-1234));