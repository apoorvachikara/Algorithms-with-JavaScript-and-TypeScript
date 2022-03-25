/**
 * 
 * @param {string} string 
 * @param {string} pattern 
 */
const naiveAlgo = (string, pattern) => {
    let M = string.length;
    let N = pattern.length;


    for (let i = 0; i <= N - M; i++) {
        let j;

        for (j = 0; j < M; j++) {
            if (txt[i + j] != pat[j])
            break;
        }
           

        if (j == M)
            console.log('Pattern found at index', i);
    }
}

let txt = "THIS IS A TEST TEXT";
    let pat = "TEST";
    naiveAlgo(txt, pat);