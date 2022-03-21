/**
 * 
 * @param {*} number 
 * @return {string}
 */
const integerToRoman = (number) => {
        const mapping = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400, 
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9, 
            'V' : 5,
            'IV' : 4,
            'I' : 1,
        }

        let result = [];
        // Step 1- divide the number by largest to smallest key 
        // Step 2- repeat the key from step 1 by number of times the keyValues divides number
        // Step 2 - update the number with given quotient
        for (const romanDigit in mapping) {
            result.push(romanDigit.repeat(Math.floor(number / mapping[romanDigit])));
            number %= mapping[romanDigit];
        }

        return result.join('');
}

console.log(integerToRoman(2439));
console.log(integerToRoman(1994));