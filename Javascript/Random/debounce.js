/**
 * 
 * @param {*} func 
 * @param {*} time 
 * @return function
 * 
 * it accepts the function to be called and timer after
 * the function should be called
 */
function debounce(func, time = 500) {
    let timer;

    // returns a function
    // whenever we call the debounce func, the previous timer is removed and 
    // new one is created. and this way we debounce the call to the function
    return function () {
        let _this = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(_this, args);    
        }, time);
    }
}


const test = debounce(() => {
    console.log('Hello World')
}, 1000);


for (let index = 0; index < 10; index++) {
    test();   
}
