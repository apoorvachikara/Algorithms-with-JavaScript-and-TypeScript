/**
 * 
 * @param {*} intervals 
 * @return {Array}
 */
const merge = function(intervals) {
    // Sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    // If previous interval ends after current item start, then merge
    if (res[res.length - 1][1] >= start) {
      const lastEnd = res[res.length - 1][1];
      // Update the ending time of new interval as the maximum of last interval's end and current interval end
      res[res.length - 1][1] = Math.max(lastEnd, end);
    } else {
      // If previous interval ends before current item start, then simply add this interval in result array.
      res.push([start, end]);
    }
  }
  return res;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1, 4], [5, 6]]));