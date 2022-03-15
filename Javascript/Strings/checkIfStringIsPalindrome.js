/**
 * Checking string is palindrome with built-in function mdzfbkjdhfkdshfkjdsh
 * @param {*} string 
 * @return {boolean}
 */
const isPalindrome = (string) => {
  return string === string.split('').reverse().join('');
}

const isPalindrome_Loops = (string) => {
    let reverse = '';
    for (let len = string.length, i = len - 1; i > -1; i--) {
        reverse += string[i];
    }
    return reverse === string;
}

const str = "NITINI";
console.log(isPalindrome(str), isPalindrome_Loops(str));