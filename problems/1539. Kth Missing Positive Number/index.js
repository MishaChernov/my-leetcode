/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let missedCount = 0;

  for (let i = 1, j = 0; i < arr.length + k + 1; i++) {
      if (i !== arr[j] && k !== missedCount) {
          missedCount++;
      } else {
          j++;
      }

      if (k === missedCount) return i;
  }

  return arr[arr.length - 1] + k;
};

console.log(findKthPositive([3,4,5], 2));