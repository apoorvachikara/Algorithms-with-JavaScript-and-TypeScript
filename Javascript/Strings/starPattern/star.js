/**
 * 
 * @param {number} number 
 */
const mainStartTriangle = (number) => {
    let str = Math.floor(number/2);
    for (let index = 1; index < number ; index += 2) {
        debugger
        console.log(`${' '.repeat(str )}${'*'.repeat(index)}${' '.repeat(str)}`)
        str -= 1; 
    }
}

mainStartTriangle(11);

const mainInverseTriangle = (number) => {
    let str = 0;
    for (let index = number; index > -1; index -= 2) {
        debugger
        console.log(`${' '.repeat(str )}${'*'.repeat(index)}${' '.repeat(str)}`)
        str += 1; 
    }
}

mainInverseTriangle(11)
