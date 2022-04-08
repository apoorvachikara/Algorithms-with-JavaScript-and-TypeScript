/**
 * Given a string you need to revers only the string not words
 * ex : "I am Apoorva Chikara"
 * o/p: "Chikara Apoorva am I";
 * 
 * It should maintain any additional whitespaces in string
 * ex : "I am Apoorva Chikara  "
 * o/p: "  Chikara Apoorva am I";
 * @param {*} string 
 * @return {string}
 */
const reverse = (string) => {
    const words = [];
    let start = 0;

    for (let index = 0, len = string.length; index < len; index++) {
        if (string[index] === ' ') {
            words.push(string.slice(start, index));
            start = index +1 ;
        }
    }
    words.push(string.slice(start));
    let s = 0;
    let e= words.length -1;

    while(s < e) {
        const temp = words[s];
        words[s] = words[e];
        words[e] = temp;
        s += 1;
        e -= 1; 
    }
    return words.join(' ');
}



console.log(reverse('I  am  Apoorva Chikara') === 'Chikara Apoorva  am  I');
console.log(reverse('&&  Apoorva Chikara  &&  ') === '  &&  Chikara Apoorva  &&');
console.log(reverse('Text     ') === '     Text');
