/**
Input s1: “advice”
s2: “advise”
Output: 4
Explanation: Substring “advi” of length 4 is the longest.
*/

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * Flow
 *
 * Step1: We check if S1 exist in S2 i.e `dfgadvi` exist in `llkadvisell`
 * Step2: Then we remove the first character in S1 `d` and check `fgadvi` in S2
 * Step3: We follow the step2 until we get any common subString if not return ''
 *
 * You can efficiently solve them using Suffix tree and Dynamic Programming
 */
const findCommonSubString = (str1, str2) => {
  if (str1 === str2) return str1;
  for (let i = 1; i < str1.length; i++) {
    const temp = str1.substring(i);
    if (str2.includes(temp)) return temp;
  }
  return '';
};

const findCommonSubStringLoop = (str1, str2) => {
  if (str1 === str2) return str1;
  let len = str1.length;

  while (len > 0) {
    const temp = str1.substr(-len);
    if (str2.includes(temp)) return temp;
    len -= 1;
  }
  return '';
};


console.log(findCommonSubString('dfgadvi', 'llkadvisell'));
console.log(findCommonSubStringLoop('dfgadvi', 'llkadvisell'));
