/**
 * 
 * @param {*} array 
 * @return {number[]}
 * 
 * This alogrithm is used to get the random values from the
 * given array
 * 
 * O(n) and space O(k) - sampled values l
 * 
 * Step 1: create a temp array(of length k) that stores values from the given array 
 * upto sampled values length you need.
 * 
 * Step 2: Once you copy the values upto  k, you run the loop i from k+1 
 * to n (array length)
 * 
 * Step 3: Select the random index from 0 to i(b/w k+1 to n) if the value is 
 * lesser than k swap element in temp array else leave it
 * 
 * Step 4: follow step 3 until loop is over
 */
const reservoirSampling = (array, samples) => {

  const temp = [];
  let i = 0;
  for (i; i < samples; i++) {
        temp.push(array[i]);
  }

  for(i; i < array.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));

      if (random < samples) {
          temp[random] = array[i];
      }
  }

  return temp;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reservoirSampling(arr, 4)); // [1, 6, 7, 3];