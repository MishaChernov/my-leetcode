/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();

  // if number already present the inrement with + 1, otherwise add in map
  for (n3 of nums3) 
    for (n4 of nums4) 
        map.set(n4+n3, (map.get(n4+n3) || 0) + 1); 
  
  let count = 0;

  for (n1 of nums1)
    for (n2 of nums2) 
        count += map.get(-(n1 + n2)) || 0;

  return count;
};

console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2]));