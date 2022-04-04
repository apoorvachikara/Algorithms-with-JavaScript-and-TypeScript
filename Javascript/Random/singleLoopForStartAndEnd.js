/**
 * 
 * @param {number[]} array 
 * @param {*} position 
 */
const loop = (array, position = "start")  => {
        let start = 0;
        let end = array.length;

        while (start < array.length && end >= 0) {
            if (position === "start") {
                console.log(array[start]);
                start += 1;
            } else {
                console.log(array[end]);
                end -= 1;
            }
        }
}

/**
 * 
 * @param {nunber[]} array 
 * @param {string} position 
 */
const loop_v1 = (array, position = "start")  => {
    let start = 0;
    let end = array.length;

    let index = position === "start" ? start : end;
    let add = position === "start" ? 1: -1;

    while (start < array.length && end >= 0) {
          console.log(start[index]);
          index = index + add;
    }
}

const array = [1, 2, 3, 4, 5, 6];
loop(array, "start");
loop(array, "end");