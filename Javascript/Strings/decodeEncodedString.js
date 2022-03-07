/**
 *  It is a reverse of encoding the string
 *  encoded string - "3a9A9A1b3c"
 *  decoded string - "aaaAAAAAAAAAAAAAAAAAAbccc";
 * @param {*} string 
 * @return {string} 
 */
const decodeString = (string) => {
    const result = [];
    for (let i =0; i < string.length; i += 2) {
        const temp = new Array(+string[i]).fill(string[i+1]);
        result.push(...temp);
    }

    return result.join("");
}

const encodedString = "3a9A9A1b5d7c3c";
console.log(decodeString(encodedString));