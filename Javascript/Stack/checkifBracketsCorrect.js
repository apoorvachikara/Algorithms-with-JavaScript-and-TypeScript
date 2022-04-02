
/**
 * Given string check if the brackets are closed properly or not
 * brackets are "{} () []"
 * If the string brackets are closing properly return true else false;
 * 
 * @param {*} string 
 * @return {boolean} 
 */

const checkIfBracketsCorrect = (string) => {
    const stack = [];
    let mapping = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    const bracketsOpening = "{[(";
    const bracketsClosing = "}])";

    const peek = () => stack[stack.length - 1];

    for (const char of string) {
        if (bracketsOpening.includes(char)) {
            stack.push(char);
            continue;
        }

        if (bracketsClosing.includes(char)) {
            if (mapping[peek()] === char) {
                 stack.pop();
                 continue;
            }

            return false;
        }
    }
    
    return stack.length === 0 ? true: false;
}

const string1 = "{{{{()}}}}";
const string2 = "{adfghgg{jkshdfkjh(hello[world])}}"; 
const string3 = "(((((((((((}}}}}}}}}}}}}}}";

console.log(checkIfBracketsCorrect(string1));
console.log(checkIfBracketsCorrect(string2));
console.log(checkIfBracketsCorrect(string3));