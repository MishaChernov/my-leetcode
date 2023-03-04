/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
      if (hash.has(nums[i]) && Math.abs(i - hash.get(nums[i])) <= k) return true;
      else hash.set(nums[i], i);
  }

  return false;
};

console.log(containsNearbyDuplicate([1,2,3,4], 3));