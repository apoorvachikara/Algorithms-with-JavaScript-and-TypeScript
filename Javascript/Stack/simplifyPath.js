/**
 * "/foo/../test/../test/../foo//bar/./baz"
 * .., ., /
 * @param {*} path 
 * @return 
 */
const simplifyPath = (path) => {

    const stack = path.split('/');
    let res = [];
    while (stack.length) {

        if (stack[stack.length - 1] === '/') {
            continue;
        } else if (stack[stack.length - 1] === '.') {
          stack.pop();
        } else if (stack[stack.length - 1] === '..') {
          stack.pop();
          stack.pop();
        } else {
            res.push(stack.pop());
        }
    }

    res = res[0] === '/'? res: res[0] = `/${res[0]}`;
    res = res.reverse().filter((a) => a);
    return res.join('/');
    
}

console.log(simplifyPath("/foo/../test/../test/../foo//bar/./baz"));
console.log(simplifyPath( "/foo/bar/baz"));
console.log(simplifyPath("/../../foo/bar/baz"));
console.log(simplifyPath('./'));
console.log(simplifyPath("/foo/./././bar/./baz///////////test/../../../kappa"));