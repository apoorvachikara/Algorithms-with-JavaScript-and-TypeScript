/**
 * 
 * @param str 
 * @returns {boolean}
 */
const isPalindrome = (str: string) => {
    return str.split('').reverse().join('') === str;
}

/**
 * 
 * @param str 
 * @returns {boolean}
 * This is without using split Time - O(n) Space - O(n)
 */
const isPalindrome_WNF = (str: string) => {
    let result = [];

    for (let len = str.length,  index = len -1 ; index > -1; index--) {
            result.push(str[index]);
    }

    return result.join('') === str;
}

const str = "isPalindrome";
const str1 = "NITIN";

console.log(isPalindrome(str));
console.log(isPalindrome_WNF(str));
console.log(isPalindrome(str1));
console.log(isPalindrome_WNF(str1));



