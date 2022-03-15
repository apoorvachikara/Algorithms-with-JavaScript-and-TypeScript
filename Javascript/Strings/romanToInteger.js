/**
 * 
 * @param {*} string 
 * @returns {string}
 * There are 7 symbols in Roman numeral system 
 *  I - 1,
 *  V - 5,
 *  X - 10,
 *  L - 50,
 *  C - 100,
 *  D - 500,
 *  M - 1000
 *  
 * Whenever we have any roman number we read it from left to right
 * and whenever we found smaller number first and then large number 
 * we subtract (large element  - small ) and add it to the sum else 
 * we only add it 
 *  for example - XVIV - X and V are ascending and then we have I 
 *  and again I that makes it 10 + 5 - 1 + 5 = 19
 */
const romanToInteger = (string) => {
    const romanTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;

    for (let i=0; i < string.length; i++){
        const cur = romanTable[string[i]];
        const next = romanTable[string[i+1]];

        if (cur < next){
            result += (next - cur) // IV -> 5 - 1 = 4
            i++;
        } else {
            result += cur
        }
    }

    return result; 
}

console.log(romanToInteger('XXVIV'));