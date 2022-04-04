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



const array = [1, 2, 3, 4, 5, 6];
loop(array, "start");
loop(array, "end");