const mergeObjects = (...objects) => {
    const result = {};

    for (let i =0, len = objects.length; i < len; i++) {
        // reading keys
        for (const key in objects[i]) {
            //check if the key exists
            if (result.hasOwnProperty(key)) {
               if (Array.isArray(result[key])) {
                    // add the values to array if it already exist
                    result[key].push(objects[i][key]);
               } else {
                   // created array for all the values
                    result[key] = [result[key],(objects[i][key])];
               }
            // add the key and value
            } else {
                result[key] = objects[i][key];
            }
        }
    }

    return result;
}

console.log(mergeObjects({name: 'Apoorva', age: 30, add: 'Noida'}, {name: 'Apoorva 1', age: 30, add: 'Noida'}, {name: 'Apoorva 2', age: 30, add: 'Noida'}));
console.log(mergeObjects({name: 'Apoorva', age: 20}));