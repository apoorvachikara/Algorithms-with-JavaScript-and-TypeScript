const string = (codeArray) => {
    const string = [];

    for (const code of codeArray) {
        string.push(String.fromCharCode(code));
    }
    return string.join('');
}

const codes =  [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
console.log(string(codes));